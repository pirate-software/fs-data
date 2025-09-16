import { z } from "zod";

import { playgroupKeySchema } from "../playgroups";
import { birthdayStringSchema, partialDateStringSchema } from "../types";

export const ferretSchema = z.object({
  name: z.string(),
  aliases: z.array(z.string()).readonly(),
  commands: z.array(z.string()).readonly(),
  sex: z.literal(["Male", "Female"]).nullable(),
  birth: partialDateStringSchema.nullable(),
  birthday: birthdayStringSchema.nullable().optional(),
  arrival: partialDateStringSchema.nullable(),
  valhalla: partialDateStringSchema.nullable(),
  playgroup: playgroupKeySchema,
  summary: z.string().optional(),
  lore: z.string().optional(),
  clips: z
    .array(
      z.object({
        id: z.string(),
        caption: z.string(),
      }),
    )
    .readonly(),
  merch: z
    .union([
      z.object({
        plushie: z.string(),
      }),
      z.object({
        other: z.string(),
      }),
    ])
    .nullable()
    .optional(),
});

export type Ferret = z.infer<typeof ferretSchema>;

const ferrets = {
  beans: {
    name: "Beans",
    aliases: [
      "Unrepentant Ear Criminal",
      "Beanus Weenus",
      "Bean boy",
      "Mr bean",
      "Jelly bean",
      "Beanie baby",
      "Beansman",
    ],
    commands: ["beans"],
    sex: "Male",
    birth: "2021-12-19",
    birthday: null,
    arrival: "2022-04-01",
    valhalla: null,
    playgroup: "genpop",
    summary:
      "Beans is a ferret of Snail's House. He is known for being very photogenic and causing chaos. He isn't the brightest bulb in the box: \"Sometimes i think, but then i forget\". ",
    lore: "Beans was purchased in a pet store. He was hanging out there by himself without friends so Thor and Shaye decided to acquire him and make sure he got all the friends he could need. Beans was bought as a pet before Thor and Shaye decided to start a ferret sanctuary. Beans' birthday is December 19th, 2021. He also has a sweet tooth and craves Shaye's ice cream. Beans is also the favorite ferret of Zultralord since day 1.",
    clips: [
      {
        id: "SoftExquisiteMageBatChest-He6myj5UUBfmL5BH",
        caption: "#ShayeHands + Pepper / Beans socktax",
      },
    ],
    merch: {
      plushie: "https://merch.piratesoftware.live/products/beans-plush",
    },
  },
  pickle: {
    name: "Pickle",
    aliases: ["Chaos incarnate", "Water bongo"],
    commands: ["pickle", "pickles"],
    sex: "Male",
    birth: null,
    birthday: "09-16", //"08-03",
    arrival: "2023-08-07",
    valhalla: null,
    playgroup: "genpop",
    summary:
      "Pickle is a rescue ferret of Snail's House. He is a super playful ferret of the babies and loves wardancing with everyone. He is the origin story for the yarrBongo and yarrGrass emotes. ",
    lore: "Pickle was surrendered to the rescue by a pet store along with his bonded friend Spud and fellow cage mate Lucky because the store was opting out of selling ferrets. He has Waardenburg and is completely deaf. Waardenburg syndrome can cause deafness and behavioral issues in ferrets. Cage mate ferrets can develop similar behavioral issues due to this style of play within their cage.",
    clips: [
      {
        id: "InquisitiveHedonisticDragonHumbleLife-R-DP1gyPjtYy3WL-",
        caption: "Pickle fountain goblin (bongos)",
      },
    ],
  },
} as const satisfies Record<string, Ferret>;

export type Ferrets = typeof ferrets;

export type FerretKey = keyof Ferrets;

const ferretKeys = Object.keys(ferrets) as FerretKey[];

export const isFerretKey = (str: string): str is FerretKey =>
  ferretKeys.includes(str as FerretKey);

export default ferrets;
