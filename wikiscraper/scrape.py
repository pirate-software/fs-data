from requests import get
import regex as re
import os
import sys
import json
import csv
from enum import Enum
from typing import List

API_BASE_URL = "https://ferrets.piratesoftware.wiki/w/api.php"

## Util

def space_to_snake(s: str) -> str:
    return s.replace(" ", "_")

def remove_spaces(s: str) -> str:
    return s.replace(" ", "")

def build_directory(path: str) -> None:
    os.makedirs(os.path.dirname(path), exist_ok=True)

def __to_custom_json_stringval__(s: str) -> str:
    quotechar = '"' if '\n' not in s else "`"
    return f'{quotechar}{s.replace(quotechar, f"\\{quotechar}")}{quotechar}'

def to_custom_json(d: dict, indent: int = 0, srcVar: bool = False) -> str: # generate json output string based on typescript format
    out = "{\n"
    indent += 1
    spaces = "  "*indent
    for k, v in d.items():
        if srcVar and k == "src" and isinstance(v, str):
            out += spaces + f'{k}: {v},\n'
        elif isinstance(v, str):
            out += spaces + f'{k}: {__to_custom_json_stringval__(v)},\n'
        elif v == None:
            out += spaces + f"{k}: null,\n"
        elif isinstance(v, list):
            out += spaces + f'{k}: [' + ", ".join(to_custom_json(x, indent, srcVar) if isinstance(x, dict) else __to_custom_json_stringval__(x) for x in v) + "],\n"
        elif isinstance(v, dict):
            if len(v) == 0:
                out += spaces + f"{k}: {{}},\n"
            else:
                out += spaces + f'{k}: ' + to_custom_json(v, indent, srcVar) + ",\n"
        else:
            print(f"Warning: unhandled type {type(v)} for key {k}")
    return out + "  "*(indent-1) + "}"

## Requests

def save_image(url: str, filename: str) -> bool: # returns True if successful
    response = get(url, stream=True)
    if response.status_code == 200:
        build_directory(filename)
        with open(filename, "wb") as f:
            for chunk in response.iter_content(8192):
                f.write(chunk)
        return True
    return False

def get_cargo_table(table_name: str, fields: str) -> list[dict]:
    out = []
    limit = 500
    offset = 0
    while True:
        table_params = {
            "action": "cargoquery",
            "tables": table_name,
            "limit": str(limit),
            "format": "json",
            "fields": fields,
            "offset": str(offset)
        }
        response = get(API_BASE_URL, params=table_params)
        response.raise_for_status()
        response_json = response.json()
        out.extend([x["title"] for x in response_json["cargoquery"]])

        if len(response_json["cargoquery"]) != limit:
            break
        offset += limit

    if "error" in response_json:
        print(f"Error fetching {table_name} table:", response_json["error"])
        return []

    return out

def get_ferret_table() -> list[dict]:
    return get_cargo_table("Ferret", "name,gender,arrivaldate,birthday,valhalla,playgroup")

def get_clips_table() -> list[dict]:
    return get_cargo_table("ClipEntries", "Ferrets,Link,Title")

def get_picture_table() -> list[dict]:
    return get_cargo_table("PictureEntries", "Ferrets,File,Title")

def get_page_content(page_name: str) -> str:
    page_params = {
        "action": "parse",
        "page": space_to_snake(page_name),
        "format": "json",
        "prop": "wikitext"
    }
    response = get(API_BASE_URL, params=page_params)
    response.raise_for_status()
    return response.json()["parse"]["wikitext"]["*"]

def get_mugshot_url(ferret_name: str) -> str | None:
    image_params = {
        "action": "query",
        "titles": f"File:{space_to_snake(ferret_name)}_Mugshot.png",
        "prop": "imageinfo",
        "iiprop": "url",
        "format": "json"
    }
    response = get(API_BASE_URL, params=image_params)
    response.raise_for_status()
    pages = response.json()["query"]["pages"]
    for page in pages.values():
        if "imageinfo" in page:
            return page["imageinfo"][0]["url"]

    # If getting the image for "Unknown" fails, return None
    if ferret_name == "Unknown":
        return None
    
    # Fallback
    return get_mugshot_url("Unknown")

def save_mugshot(ferret_name: str) -> bool:
    img_url = get_mugshot_url(ferret_name)
    if img_url:
        return save_image(img_url, f"../src/assets/ferrets/{remove_spaces(ferret_name).lower()}/mugshot.png")
    return False

## Main

INFOBOX_REGEX = re.compile(r"\{\{Infobox Ferret\s*((?:\|[ \t]*\w*[ \t]*=[ \t]*.*\s*)+)\s*\}\}")
INFOBOX_ITEMS_REGEX = re.compile(r"\|[ \t]*(\w+)[ \t]*=[ \t]*(.*)")

PAGE_SUMMARY_REGEX = re.compile(r"\{\{Infobox Ferret.*?\}\}\s*(.*?)\s*(?:==|$)", re.DOTALL)
PAGE_LORE_REGEX = re.compile(r"==\s*Lore\s*==\s*(.*?)\s*(?:==|$)", re.DOTALL)

VALID_PLAYGROUPS = [
    "bepeepo",
    "genpop",
    "kyosai",
    "m",
    "oldies",
    "pms",
    "rb",
    "solo",
    "valhalla",
    "vons",
]

def de_wikitext(s: str) -> str: # Wikitext to plain text
    s = re.sub(r"\[\[File:.*?\]\]", "", s)  # Remove file links
    s = re.sub(r"\[\[(?:[^\|\]]*\|)?([^\]]+)\]\]", r"\1", s)  # Simplify links
    s = re.sub(r"\[http[^\s]* ([^\]]+)\]", r"\1", s)  # Simplify external links
    s = re.sub(r"''+", "", s)  # Remove italics/bold
    s = re.sub(r"<ref.*?>.*?</ref>", "", s)  # Remove references
    s = re.sub(r"<.*?>", "", s)  # Remove other HTML tags
    s = re.sub(r"\{\{.*?\}\}", "", s)  # Remove templates
    return s.strip() 


def main():
    # check current dir is "wikiscraper"
    if not os.path.exists("scrape.py"):
        print("Please run this script from the 'wikiscraper' directory")
        exit(1)

    wiki_down = any(arg in ("--no-wiki", "-n") for arg in sys.argv[1:])

    try:
        if not wiki_down:
            print("Fetching ferrets table")
        ferrets = get_ferret_table() if not wiki_down else []
    except:
        print("Failed to get ferrets. The wiki is probably down.")
        wiki_down = True
        ferrets = []

    if not wiki_down and len(ferrets) < 60:
        print("Less than 60 ferrets found, something is probably wrong")
        exit(1)
    
    while True:
        print("\nSelect an option:")
        if not wiki_down:
            print("1. Download Mugshots")
            print("2. Generate core.ts JSON")
            print("3. Get Other Images and Save Captions to CSV")
        print("4. Generate images.ts imports + JSON")
        print("9. Exit")
        choice = input("Enter your choice: ")

        if choice == "1" and not wiki_down:
            for ferret in ferrets:
                if not save_mugshot(ferret["name"]):
                    print(f"Failed to save mugshot for {ferret['name']}")
            print("Images downloaded and saved")
        elif choice == "2" and not wiki_down:
            generate_core_json(ferrets)
            print("core_snippet.ts generated")
        elif choice == "3" and not wiki_down:
            download_pictures(ferrets)
            print("Other images downloaded and saved")
        elif choice == "4":
            generate_images_ts_json()
            print("images.ts generated")
        elif choice == "9":
            break
        else:
            print("Invalid choice, please try again.")

def generate_core_json(ferrets: list[dict]) -> None:
    ferret_data = dict()

    for ferret in ferrets:
        name = ferret["name"].strip()
        name_nospace = remove_spaces(name).lower()
        name_snake = space_to_snake(name)
        page = get_page_content(name)
        
        # summary
        summary_search = PAGE_SUMMARY_REGEX.search(page)
        if not summary_search:
            print(f"Could not find summary for {name}")
            summary = ""
        else:
            summary = de_wikitext(summary_search.group(1))

        # lore
        lore_search = PAGE_LORE_REGEX.search(page)
        if not lore_search:
            print(f"Could not find lore for {name}")
            lore = ""
        else:    
            lore = de_wikitext(lore_search.group(1))

        # infobox
        infobox_search = INFOBOX_REGEX.search(page)
        if not infobox_search:
            print(f"Could not find infobox for {name}")
            continue
        infobox_text = infobox_search.group(1)
        infobox_items = INFOBOX_ITEMS_REGEX.findall(infobox_text)
        infobox_dict = {k.strip().lower(): v.strip() for k, v in infobox_items}
        
        # aliases
        aliases = []
        for alias_key in ["shayename", "nickname"]:
            if alias_key in infobox_dict:
                names = [n.strip() for n in infobox_dict[alias_key].split("<br>")]
                names = [n for n in names if n] # remove blanks/trailing <br>
                aliases.extend(names)

        sex = ferret["gender"].strip()
        if sex not in ["Male", "Female"]:
            print(f"Unrecognized sex for {name}: {sex}")
            sex = None

        birthday_text = ferret["birthday"].strip() # i.e. "Apr 3"
        birthday = None
        if birthday_text and re.match(r"^[A-Za-z]{3,} [0-9]{1,2}$", birthday_text):
            month_str, day_str = birthday_text.split(" ")
            month_str = month_str.lower()
            month_map = {
                "jan": "01", "feb": "02", "mar": "03", "apr": "04",
                "may": "05", "jun": "06", "jul": "07", "aug": "08",
                "sep": "09", "oct": "10", "nov": "11", "dec": "12",
                "january": "01", "february": "02", "march": "03", "april": "04",
                "may": "05", "june": "06", "july": "07", "august": "08",
                "september": "09", "october": "10", "november": "11", "december": "12",
                "sept": "09"
            }
            if month_str in month_map:
                month = month_map[month_str]
                day = day_str.zfill(2)
                birthday = f"{month}-{day}"
            else:
                print(f"Unrecognized month in birthday for {name}: {birthday_text}")
                birthday = None
        elif birthday_text == "":
            print(f"No birthday listed for {name}")
            birthday = None
        else:
            print(f"Unrecognized birthday format for {name}: {birthday_text}")
            birthday = None

        arrival = ferret["arrivaldate"].strip().replace("/", "-")
        if not re.match(r"^[0-9]{4}-[0-9]{2}-[0-9]{2}$", arrival):
            print(f"Unrecognized arrival date format for {name}: {arrival}")
            arrival = None

        valhalla = ferret["valhalla"].strip().replace("/", "-")
        if not re.match(r"^[0-9]{4}-[0-9]{2}-[0-9]{2}$", valhalla):
            if valhalla != "":
                print(f"Unrecognized valhalla date format for {name}: {valhalla}")
            valhalla = None

        commands = [name_nospace]
        if name_nospace[-1] == "s":
            commands.append(name_nospace[:-1]) # Allow mistakes of missing 's' at end

        playgroup = re.sub(r"[^a-zA-Z]", "", ferret["playgroup"]).lower()
        if playgroup not in VALID_PLAYGROUPS:
            print(f"Unrecognized playgroup for {name}: {ferret['playgroup']}")
            playgroup = None

        ferret_data[name_nospace] = {
            "name": name,
            "wikipage": name_snake,
            "aliases": aliases,
            "commands": commands,
            "sex": sex,
            "birth": None, #TODO - this data doesn't seem to exist in cargo/cards
            "birthday": birthday,
            "arrival": arrival,
            "valhalla": valhalla,
            "playgroup": playgroup,
            "summary": summary,
            "lore": lore,
            "clips": [], #added below
            "merch": None, #added below
        }

    # process clips
    clips = get_clips_table()
    for clip in clips:
        ferret_names = [remove_spaces(f.strip()).lower() for f in clip["Ferrets"].strip().split(";")]
        for ferret_name in ferret_names:
            if ferret_name in ferret_data:
                ferret_data[ferret_name]["clips"].append({
                    "url": clip["Link"].strip(),
                    "caption": de_wikitext(clip["Title"].strip())
                })
            else:
                print(f"Clip entry for unknown ferret: {ferret_name}")

    # process merch
    with open("merch.json", "r", encoding="utf-8") as f:
        merch_data = f.read()
    merch_json = json.loads(merch_data)

    for k, v in merch_json.items():
        k_nospace = remove_spaces(k).lower()
        if k_nospace in ferret_data:
            ferret_data[k_nospace]["merch"] = v
        else:
            print(f"Merch entry for unknown ferret: {k}")

    # output to core_snippet.ts
    #TODO: auto insert data
    ferret_data_string = "const ferrets = " + to_custom_json(ferret_data) + " as const satisfies Record<string, Ferret>;"
    with open("core_snippet.ts", "w", encoding="utf-8") as f:
        f.write(ferret_data_string)
    
    with open("core_snippet.json", "w", encoding="utf-8") as f: # regular json output for other uses
        json.dump(ferret_data, f, indent=2)

def download_pictures(ferrets):
    pictures = get_picture_table()
    print(f"Found {len(pictures)} pictures")

    picture_data = dict()

    ferret_counts = dict()
    for ferret in ferrets:
        ferret_counts[ferret["name"]] = 0
        picture_data[ferret["name"]] = []
    
    for i, pic in enumerate(pictures):
        ferret_names = [name.strip() for name in pic["Ferrets"].split(";")]
        for ferret_name in ferret_names:
            file_extension = pic['File'].split(".")[-1].lower()
            ferret_counts[ferret_name] = ferret_counts[ferret_name] + 1
            ferret_no_space = remove_spaces(ferret_name).lower()
            filename = f"../src/assets/ferrets/{ferret_no_space}/{ferret_counts[ferret_name]:02d}.{file_extension}"
            if file_extension not in ["png", "jpg", "jpeg", "gif", "bmp", "webp"]:
                print(f"Skipping unsupported file type: {filename}")
                continue
            if not save_image(f"https://ferrets.piratesoftware.wiki/wiki/Special:FilePath/{space_to_snake(pic['File'])}", filename):
                print(f"Failed to save image {pic['File']} for {ferret_name}")
            else:
                print(f"Saved image {i+1}/{len(pictures)}: {filename}")
                alt = de_wikitext(pic["Title"].strip())
                if not alt:
                    alt = None
                picture_data[ferret_name].append({
                    "ferret_no_space": ferret_no_space,
                    "src": filename.split("/")[-1],
                    "alt": alt
                })
    
    # save picture data to csv
    with open("pictures.csv", "w", newline="", encoding="utf-8") as csvfile:
        fieldnames = ["ferret_name", "ferret_no_space", "src", "alt"]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

        writer.writeheader()
        for ferret_name, pics in picture_data.items():
            for pic in pics:
                writer.writerow({
                    "ferret_name": ferret_name,
                    "ferret_no_space": pic["ferret_no_space"],
                    "src": pic["src"],
                    "alt": pic["alt"] if pic["alt"] else ""
                })

class ImageType(Enum):
    MUGSHOT = 1
    PHOTO = 2
    EMOTE = 3

class ImageEntry:
    def __init__(self, ferret_name: str, ferret_nospace: str, filename: str, alt: str | None, img_type: ImageType):
        self.ferret_name = ferret_name
        self.ferret_nospace = ferret_nospace
        self.filename = filename
        self.alt = alt
        self.img_type = img_type

def generate_images_ts_json():
    images: List[ImageEntry] = []

    # Load pictures.csv
    with open("pictures.csv", "r", newline="", encoding="utf-8") as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            ferret_name = row["ferret"].strip()
            ferret_nospace = remove_spaces(ferret_name).lower()
            src = row["src"].strip()
            alt = row["alt"].strip() if row["alt"].strip() else None
            images.append(ImageEntry(ferret_name, ferret_nospace, src, alt, ImageType.PHOTO))

    # Anything not in pictures.csv should either be an emote or a mugshot
    # We find these by searching the assets/ferrets directory
    # All mugshots are named mugshot.XXX
    # all emotes start with either "yarr" or "dook" ie yarrSadge.gif or dookSniff.png
    # mugshots should have alt="Mugshot of {ferret}"
    # emotes should have alt="{ferret}'s {filename} emote"

    with open("core_snippet.json", "r", encoding="utf-8") as f:
        core_data = json.load(f)

    assets_dir = "../src/assets/ferrets"
    for ferret_dir in os.listdir(assets_dir):
        ferret_path = os.path.join(assets_dir, ferret_dir)
        if not os.path.isdir(ferret_path):
            print(f"Skipping non-directory {ferret_path}")
            continue

        # get ferret names from core_snippet.json
        ferret_name = core_data.get(ferret_dir, {}).get("name")
        ferret_nospace = remove_spaces(ferret_name).lower() if ferret_name else None

        if not ferret_name:
            print(f"Could not find ferret name for directory {ferret_dir}, skipping")
            continue

        for filename in os.listdir(ferret_path):
            filepath = os.path.join(ferret_path, filename)
            if not os.path.isfile(filepath):
                continue

            if re.match(r"mugshot\.(png|jpg|jpeg|gif|webp)$", filename, re.IGNORECASE): # mugshots
                # mugshot
                if any(img.filename == filename and img.ferret_name == ferret_name for img in images):
                    continue # already in pictures.csv
                alt = f"Mugshot of {ferret_name}"
                images.append(ImageEntry(ferret_name, ferret_nospace, filename, alt, ImageType.MUGSHOT))
            elif re.match(r"(?:yarr|dook).*\.(png|jpg|jpeg|gif|webp)$", filename, re.IGNORECASE): # emotes
                # emote
                if any(img.filename == filename and img.ferret_name == ferret_name for img in images):
                    continue # already in pictures.csv
                alt = f"{ferret_name}'s {filename.split('.')[0]} emote"
                images.append(ImageEntry(ferret_name, ferret_nospace, filename, alt, ImageType.EMOTE))
            else: # pictures
                if any(img.filename == filename and img.ferret_name == ferret_name for img in images):
                    continue # already in pictures.csv
                print(f"Unknown image file {filename} for {ferret_name}, skipping")
                continue

    # Generate images_snippet.ts
    importsString = ""
    mugshotsDict = dict()
    photosDict = dict()
    emotesDict = dict()

    # Mugshots
    mugshots = [img for img in images if img.img_type == ImageType.MUGSHOT]
    for img in mugshots:
        varname = f"{img.ferret_nospace}Mugshot"
        importsString += f'import {varname} from "../assets/ferrets/{remove_spaces(img.ferret_name).lower()}/{img.filename}";\n'
        mugshotsDict[img.ferret_nospace] = {"src": varname, "alt": img.alt if img.alt else ""}
    
    importsString += "\n"

    # Photos
    photos = [img for img in images if img.img_type == ImageType.PHOTO]
    for img in photos:
        fileNoExt = int(img.filename.split('.')[0])
        varname = f"{img.ferret_nospace}Image{fileNoExt}"
        importsString += f'import {varname} from "../assets/ferrets/{remove_spaces(img.ferret_name).lower()}/{img.filename}";\n'
        if img.ferret_nospace not in photosDict:
            photosDict[img.ferret_nospace] = []
        photosDict[img.ferret_nospace].append({"src": varname, "alt": img.alt if img.alt else ""})
    
    importsString += "\n"

    # Emotes
    emotes = [img for img in images if img.img_type == ImageType.EMOTE]
    for img in emotes:
        fileNoExt = img.filename.split('.')[0]
        varname = f"{img.ferret_nospace}{fileNoExt[0].capitalize()}{fileNoExt[1:]}"
        importsString += f'import {varname} from "../assets/ferrets/{remove_spaces(img.ferret_name).lower()}/{img.filename}";\n'
        if img.ferret_nospace not in emotesDict:
            emotesDict[img.ferret_nospace] = []
        emotesDict[img.ferret_nospace].append({"src": varname, "alt": img.alt if img.alt else ""})

    outString = importsString + "\n\n"
    outString += "const ferretImages: Partial<{\n  [key in FerretKey]: FerretImages;\n}> = " + to_custom_json(photosDict, srcVar=True)+";\n\n"
    outString += "const ferretMugshots: {\n  [key in FerretKey]: FerretImages;\n} = " + to_custom_json(mugshotsDict, srcVar=True)+";\n\n"
    outString += "const ferretEmoteImages: Partial<{\n  [key in FerretKey]: FerretImages;\n}> = " + to_custom_json(emotesDict, srcVar=True)+";\n\n"

    # write to images_snippet.ts
    with open("images_snippet.ts", "w", encoding="utf-8") as f:
        f.write(outString)
    


if __name__ == "__main__":
    main()
