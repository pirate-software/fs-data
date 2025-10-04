import { z } from "zod";

import { isFerretKey, type FerretKey } from "./core";

import badgerMugshot from "../assets/ferrets/badger/mugshot.png";
import bagelMugshot from "../assets/ferrets/bagel/mugshot.png";
import bananaMugshot from "../assets/ferrets/banana/mugshot.png";
import banditMugshot from "../assets/ferrets/bandit/mugshot.png";
import beansMugshot from "../assets/ferrets/beans/mugshot.png";
import beefMugshot from "../assets/ferrets/beef/mugshot.png";
import bigmikeMugshot from "../assets/ferrets/bigmike/mugshot.png";
import bruceMugshot from "../assets/ferrets/bruce/mugshot.png";
import cashewMugshot from "../assets/ferrets/cashew/mugshot.png";
import cheeseMugshot from "../assets/ferrets/cheese/mugshot.png";
import chiliMugshot from "../assets/ferrets/chili/mugshot.png";
import cowboyMugshot from "../assets/ferrets/cowboy/mugshot.png";
import demeterMugshot from "../assets/ferrets/demeter/mugshot.png";
import eddieMugshot from "../assets/ferrets/eddie/mugshot.png";
import felixMugshot from "../assets/ferrets/felix/mugshot.png";
import figMugshot from "../assets/ferrets/fig/mugshot.png";
import finnMugshot from "../assets/ferrets/finn/mugshot.png";
import ghostMugshot from "../assets/ferrets/ghost/mugshot.png";
import hazelnutMugshot from "../assets/ferrets/hazelnut/mugshot.png";
import henryMugshot from "../assets/ferrets/henry/mugshot.png";
import jackMugshot from "../assets/ferrets/jack/mugshot.png";
import jasmineMugshot from "../assets/ferrets/jasmine/mugshot.png";
import jinxMugshot from "../assets/ferrets/jinx/mugshot.png";
import kahluaMugshot from "../assets/ferrets/kahlua/mugshot.png";
import kittyMugshot from "../assets/ferrets/kitty/mugshot.png";
import kyloMugshot from "../assets/ferrets/kylo/mugshot.png";
import kyoMugshot from "../assets/ferrets/kyo/mugshot.png";
import latteMugshot from "../assets/ferrets/latte/mugshot.png";
import lokiMugshot from "../assets/ferrets/loki/mugshot.png";
import louiseMugshot from "../assets/ferrets/louise/mugshot.png";
import luckyMugshot from "../assets/ferrets/lucky/mugshot.png";
import lunaMugshot from "../assets/ferrets/luna/mugshot.png";
import maisyMugshot from "../assets/ferrets/maisy/mugshot.png";
import maitaiMugshot from "../assets/ferrets/maitai/mugshot.png";
import maxMugshot from "../assets/ferrets/max/mugshot.png";
import miloMugshot from "../assets/ferrets/milo/mugshot.png";
import mimosaMugshot from "../assets/ferrets/mimosa/mugshot.png";
import mishkaMugshot from "../assets/ferrets/mishka/mugshot.png";
import mistoffeleesMugshot from "../assets/ferrets/mistoffelees/mugshot.png";
import mochaMugshot from "../assets/ferrets/mocha/mugshot.png";
import mooseMugshot from "../assets/ferrets/moose/mugshot.png";
import mouseMugshot from "../assets/ferrets/mouse/mugshot.png";
import moxieMugshot from "../assets/ferrets/moxie/mugshot.png";
import nachoMugshot from "../assets/ferrets/nacho/mugshot.png";
import odinMugshot from "../assets/ferrets/odin/mugshot.png";
import onionMugshot from "../assets/ferrets/onion/mugshot.png";
import peanutMugshot from "../assets/ferrets/peanut/mugshot.png";
import peanut2Mugshot from "../assets/ferrets/peanut2/mugshot.png";
import peepoMugshot from "../assets/ferrets/peepo/mugshot.png";
import pepperMugshot from "../assets/ferrets/pepper/mugshot.png";
import pepper2Mugshot from "../assets/ferrets/pepper2/mugshot.png";
import pickleMugshot from "../assets/ferrets/pickle/mugshot.png";
import roseMugshot from "../assets/ferrets/rose/mugshot.png";
import roxyMugshot from "../assets/ferrets/roxy/mugshot.png";
import rustyMugshot from "../assets/ferrets/rusty/mugshot.png";
import saiMugshot from "../assets/ferrets/sai/mugshot.png";
import salsaMugshot from "../assets/ferrets/salsa/mugshot.png";
import saltMugshot from "../assets/ferrets/salt/mugshot.png";
import salt2Mugshot from "../assets/ferrets/salt2/mugshot.png";
import scotchMugshot from "../assets/ferrets/scotch/mugshot.png";
import skyeMugshot from "../assets/ferrets/skye/mugshot.png";
import snailsMugshot from "../assets/ferrets/snails/mugshot.png";
import snowballMugshot from "../assets/ferrets/snowball/mugshot.png";
import spudMugshot from "../assets/ferrets/spud/mugshot.png";
import teepMugshot from "../assets/ferrets/teep/mugshot.png";
import thelmaMugshot from "../assets/ferrets/thelma/mugshot.png";
import tobyMugshot from "../assets/ferrets/toby/mugshot.png";
import torchMugshot from "../assets/ferrets/torch/mugshot.png";
import tortillaMugshot from "../assets/ferrets/tortilla/mugshot.png";
import vincentMugshot from "../assets/ferrets/vincent/mugshot.png";
import whiskeyMugshot from "../assets/ferrets/whiskey/mugshot.png";
import zeroMugshot from "../assets/ferrets/zero/mugshot.png";

import badgerImage1 from "../assets/ferrets/badger/01.jpg";
import badgerImage2 from "../assets/ferrets/badger/02.jpg";
import badgerImage3 from "../assets/ferrets/badger/03.jpg";
import badgerImage4 from "../assets/ferrets/badger/04.jpg";
import badgerImage5 from "../assets/ferrets/badger/05.jpg";
import badgerImage6 from "../assets/ferrets/badger/06.jpg";
import badgerImage7 from "../assets/ferrets/badger/07.jpg";
import badgerImage8 from "../assets/ferrets/badger/08.jpg";
import beansImage1 from "../assets/ferrets/beans/01.jpg";
import beansImage2 from "../assets/ferrets/beans/02.jpg";
import beansImage3 from "../assets/ferrets/beans/03.jpg";
import beansImage4 from "../assets/ferrets/beans/04.jpg";
import beansImage5 from "../assets/ferrets/beans/05.jpg";
import beansImage6 from "../assets/ferrets/beans/06.jpg";
import beansImage7 from "../assets/ferrets/beans/07.jpg";
import beansImage8 from "../assets/ferrets/beans/08.png";
import beansImage9 from "../assets/ferrets/beans/09.jpg";
import beansImage10 from "../assets/ferrets/beans/10.jpg";
import beansImage11 from "../assets/ferrets/beans/11.jpg";
import beansImage12 from "../assets/ferrets/beans/12.jpg";
import beansImage13 from "../assets/ferrets/beans/13.png";
import beansImage14 from "../assets/ferrets/beans/14.jpg";
import beansImage15 from "../assets/ferrets/beans/15.jpg";
import beansImage16 from "../assets/ferrets/beans/16.jpg";
import beansImage17 from "../assets/ferrets/beans/17.jpg";
import beansImage18 from "../assets/ferrets/beans/18.jpg";
import beansImage19 from "../assets/ferrets/beans/19.jpg";
import beansImage20 from "../assets/ferrets/beans/20.jpg";
import beansImage21 from "../assets/ferrets/beans/21.jpg";
import beansImage22 from "../assets/ferrets/beans/22.jpg";
import beansImage23 from "../assets/ferrets/beans/23.jpg";
import beansImage24 from "../assets/ferrets/beans/24.jpg";
import beansImage25 from "../assets/ferrets/beans/25.jpg";
import beansImage26 from "../assets/ferrets/beans/26.jpg";
import beansImage27 from "../assets/ferrets/beans/27.jpg";
import beansImage28 from "../assets/ferrets/beans/28.jpg";
import beansImage29 from "../assets/ferrets/beans/29.jpg";
import beansImage30 from "../assets/ferrets/beans/30.png";
import beansImage31 from "../assets/ferrets/beans/31.jpg";
import beansImage32 from "../assets/ferrets/beans/32.jpg";
import beansImage33 from "../assets/ferrets/beans/33.jpg";
import beansImage34 from "../assets/ferrets/beans/34.jpg";
import beansImage35 from "../assets/ferrets/beans/35.jpg";
import beansImage36 from "../assets/ferrets/beans/36.jpg";
import beansImage37 from "../assets/ferrets/beans/37.jpg";
import beansImage38 from "../assets/ferrets/beans/38.jpg";
import beansImage39 from "../assets/ferrets/beans/39.jpg";
import beansImage40 from "../assets/ferrets/beans/40.jpg";
import beansImage41 from "../assets/ferrets/beans/41.jpg";
import beansImage42 from "../assets/ferrets/beans/42.jpg";
import beansImage43 from "../assets/ferrets/beans/43.jpg";
import beansImage44 from "../assets/ferrets/beans/44.jpg";
import beansImage45 from "../assets/ferrets/beans/45.jpg";
import beansImage46 from "../assets/ferrets/beans/46.jpg";
import beefImage1 from "../assets/ferrets/beef/01.jpg";
import beefImage2 from "../assets/ferrets/beef/02.jpg";
import beefImage3 from "../assets/ferrets/beef/03.jpg";
import beefImage4 from "../assets/ferrets/beef/04.jpg";
import beefImage5 from "../assets/ferrets/beef/05.jpg";
import beefImage6 from "../assets/ferrets/beef/06.jpg";
import beefImage7 from "../assets/ferrets/beef/07.jpg";
import beefImage8 from "../assets/ferrets/beef/08.jpg";
import beefImage9 from "../assets/ferrets/beef/09.jpg";
import beefImage10 from "../assets/ferrets/beef/10.jpg";
import beefImage11 from "../assets/ferrets/beef/11.jpg";
import beefImage12 from "../assets/ferrets/beef/12.jpg";
import bigmikeImage1 from "../assets/ferrets/bigmike/01.jpg";
import bigmikeImage2 from "../assets/ferrets/bigmike/02.jpg";
import bigmikeImage3 from "../assets/ferrets/bigmike/03.jpg";
import bruceImage1 from "../assets/ferrets/bruce/01.jpg";
import bruceImage2 from "../assets/ferrets/bruce/02.jpg";
import bruceImage3 from "../assets/ferrets/bruce/03.jpg";
import bruceImage4 from "../assets/ferrets/bruce/04.jpg";
import bruceImage5 from "../assets/ferrets/bruce/05.jpg";
import cowboyImage1 from "../assets/ferrets/cowboy/01.jpg";
import demeterImage1 from "../assets/ferrets/demeter/01.jpg";
import eddieImage1 from "../assets/ferrets/eddie/01.jpg";
import eddieImage2 from "../assets/ferrets/eddie/02.jpg";
import figImage1 from "../assets/ferrets/fig/01.jpg";
import figImage2 from "../assets/ferrets/fig/02.jpg";
import figImage3 from "../assets/ferrets/fig/03.jpg";
import henryImage1 from "../assets/ferrets/henry/01.jpg";
import henryImage2 from "../assets/ferrets/henry/02.jpg";
import henryImage3 from "../assets/ferrets/henry/03.jpg";
import henryImage4 from "../assets/ferrets/henry/04.jpg";
import henryImage5 from "../assets/ferrets/henry/05.jpg";
import henryImage6 from "../assets/ferrets/henry/06.jpg";
import henryImage7 from "../assets/ferrets/henry/07.jpg";
import henryImage8 from "../assets/ferrets/henry/08.jpg";
import henryImage9 from "../assets/ferrets/henry/09.png";
import henryImage10 from "../assets/ferrets/henry/10.jpg";
import henryImage11 from "../assets/ferrets/henry/11.jpg";
import henryImage12 from "../assets/ferrets/henry/12.jpg";
import henryImage13 from "../assets/ferrets/henry/13.jpg";
import henryImage14 from "../assets/ferrets/henry/14.jpg";
import henryImage15 from "../assets/ferrets/henry/15.jpg";
import henryImage16 from "../assets/ferrets/henry/16.jpg";
import henryImage17 from "../assets/ferrets/henry/17.jpg";
import henryImage18 from "../assets/ferrets/henry/18.jpg";
import henryImage19 from "../assets/ferrets/henry/19.png";
import henryImage20 from "../assets/ferrets/henry/20.jpg";
import henryImage21 from "../assets/ferrets/henry/21.jpg";
import henryImage22 from "../assets/ferrets/henry/22.jpg";
import henryImage23 from "../assets/ferrets/henry/23.jpg";
import henryImage24 from "../assets/ferrets/henry/24.jpg";
import henryImage25 from "../assets/ferrets/henry/25.png";
import henryImage26 from "../assets/ferrets/henry/26.jpg";
import henryImage27 from "../assets/ferrets/henry/27.jpg";
import henryImage28 from "../assets/ferrets/henry/28.jpg";
import henryImage29 from "../assets/ferrets/henry/29.jpg";
import henryImage30 from "../assets/ferrets/henry/30.jpg";
import henryImage31 from "../assets/ferrets/henry/31.jpg";
import henryImage32 from "../assets/ferrets/henry/32.jpg";
import henryImage33 from "../assets/ferrets/henry/33.jpg";
import henryImage34 from "../assets/ferrets/henry/34.jpg";
import henryImage35 from "../assets/ferrets/henry/35.jpg";
import henryImage36 from "../assets/ferrets/henry/36.jpg";
import henryImage37 from "../assets/ferrets/henry/37.jpg";
import henryImage38 from "../assets/ferrets/henry/38.png";
import henryImage39 from "../assets/ferrets/henry/39.jpg";
import henryImage40 from "../assets/ferrets/henry/40.jpg";
import henryImage41 from "../assets/ferrets/henry/41.jpg";
import henryImage42 from "../assets/ferrets/henry/42.jpg";
import henryImage43 from "../assets/ferrets/henry/43.jpg";
import henryImage44 from "../assets/ferrets/henry/44.jpg";
import henryImage45 from "../assets/ferrets/henry/45.jpg";
import henryImage46 from "../assets/ferrets/henry/46.jpg";
import henryImage47 from "../assets/ferrets/henry/47.jpg";
import henryImage48 from "../assets/ferrets/henry/48.jpg";
import henryImage49 from "../assets/ferrets/henry/49.jpg";
import henryImage50 from "../assets/ferrets/henry/50.jpg";
import henryImage51 from "../assets/ferrets/henry/51.jpg";
import henryImage52 from "../assets/ferrets/henry/52.png";
import henryImage53 from "../assets/ferrets/henry/53.jpg";
import henryImage54 from "../assets/ferrets/henry/54.png";
import henryImage55 from "../assets/ferrets/henry/55.jpg";
import henryImage56 from "../assets/ferrets/henry/56.jpg";
import henryImage57 from "../assets/ferrets/henry/57.jpg";
import henryImage58 from "../assets/ferrets/henry/58.jpg";
import henryImage59 from "../assets/ferrets/henry/59.jpg";
import henryImage60 from "../assets/ferrets/henry/60.jpg";
import henryImage61 from "../assets/ferrets/henry/61.jpg";
import henryImage62 from "../assets/ferrets/henry/62.jpg";
import henryImage63 from "../assets/ferrets/henry/63.jpg";
import henryImage64 from "../assets/ferrets/henry/64.jpg";
import henryImage65 from "../assets/ferrets/henry/65.jpg";
import henryImage66 from "../assets/ferrets/henry/66.jpg";
import henryImage67 from "../assets/ferrets/henry/67.jpg";
import henryImage68 from "../assets/ferrets/henry/68.jpg";
import henryImage69 from "../assets/ferrets/henry/69.jpg";
import henryImage70 from "../assets/ferrets/henry/70.jpg";
import jinxImage1 from "../assets/ferrets/jinx/01.jpg";
import kahluaImage1 from "../assets/ferrets/kahlua/01.jpg";
import mochaImage1 from "../assets/ferrets/mocha/01.jpg";
import mochaImage2 from "../assets/ferrets/mocha/02.jpg";
import mouseImage1 from "../assets/ferrets/mouse/01.jpg";
import moxieImage1 from "../assets/ferrets/moxie/01.jpg";
import moxieImage2 from "../assets/ferrets/moxie/02.jpg";
import onionImage1 from "../assets/ferrets/onion/01.jpg";
import onionImage2 from "../assets/ferrets/onion/02.jpg";
import onionImage3 from "../assets/ferrets/onion/03.jpg";
import peanutImage1 from "../assets/ferrets/peanut/01.jpg";
import peanutImage2 from "../assets/ferrets/peanut/02.jpg";
import peanutImage3 from "../assets/ferrets/peanut/03.jpg";
import teepImage1 from "../assets/ferrets/teep/01.jpg";

import beansYarrAww from "../assets/ferrets/beans/yarrAww.png";
import beansYarrBeans from "../assets/ferrets/beans/yarrBeans.png";
import beansYarrBite from "../assets/ferrets/beans/yarrBite.gif";
import beansYarrBluh from "../assets/ferrets/beans/yarrBluh.gif";
import beansYarrBrows from "../assets/ferrets/beans/yarrBrows.gif";
import beansYarrChaos from "../assets/ferrets/beans/yarrChaos.gif";
import beansYarrChatMD from "../assets/ferrets/beans/yarrChatMD.png";
import beansYarrComfy from "../assets/ferrets/beans/yarrComfy.gif";
import beansYarrCult from "../assets/ferrets/beans/yarrCult.gif";
import beansYarrCultist from "../assets/ferrets/beans/yarrCultist.png";
import beansYarrD from "../assets/ferrets/beans/yarrD.png";
import beansYarrDance from "../assets/ferrets/beans/yarrDance.gif";
import beansYarrDemocracy from "../assets/ferrets/beans/yarrDemocracy.gif";
import beansYarrFear from "../assets/ferrets/beans/yarrFear.png";
import beansYarrFine from "../assets/ferrets/beans/yarrFine.gif";
import beansYarrHey from "../assets/ferrets/beans/yarrHey.gif";
import beansYarrHmm from "../assets/ferrets/beans/yarrHmm.gif";
import beansYarrHype from "../assets/ferrets/beans/yarrHype.gif";
import beansYarrLick from "../assets/ferrets/beans/yarrLick.png";
import beansYarrLook from "../assets/ferrets/beans/yarrLook.png";
import beansYarrLove from "../assets/ferrets/beans/yarrLove.gif";
import beansYarrLUL from "../assets/ferrets/beans/yarrLUL.png";
import beansYarrMYAA from "../assets/ferrets/beans/yarrMYAA.gif";
import beansYarrNerd from "../assets/ferrets/beans/yarrNerd.gif";
import beansYarrNodders from "../assets/ferrets/beans/yarrNodders.gif";
import beansYarrNotes from "../assets/ferrets/beans/yarrNotes.png";
import beansYarrPet from "../assets/ferrets/beans/yarrPet.gif";
import beansYarrPrime from "../assets/ferrets/beans/yarrPrime.gif";
import beansYarrRabid from "../assets/ferrets/beans/yarrRabid.gif";
import beansYarrRad from "../assets/ferrets/beans/yarrRad.png";
import beansYarrSadge from "../assets/ferrets/beans/yarrSadge.gif";
import beansYarrSalute from "../assets/ferrets/beans/yarrSalute.png";
import beansYarrSip from "../assets/ferrets/beans/yarrSip.png";
import beansYarrSpicy from "../assets/ferrets/beans/yarrSpicy.png";
import beansYarrStinks from "../assets/ferrets/beans/yarrStinks.gif";
import beansYarrStinky from "../assets/ferrets/beans/yarrStinky.gif";
import beansYarrStonks from "../assets/ferrets/beans/yarrStonks.gif";
import beansYarrWave from "../assets/ferrets/beans/yarrWave.gif";
import beansYarrWhy from "../assets/ferrets/beans/yarrWhy.gif";
import beansYarrWOW from "../assets/ferrets/beans/yarrWOW.gif";
import luckyDookSniff from "../assets/ferrets/lucky/dookSniff.png";
import mouseDookHype from "../assets/ferrets/mouse/dookHype.png";
import mouseDookLurk from "../assets/ferrets/mouse/dookLurk.png";
import pickleDookReally from "../assets/ferrets/pickle/dookReally.png";
import pickleYarrBongos from "../assets/ferrets/pickle/yarrBongos.gif";
import pickleYarrGlue from "../assets/ferrets/pickle/yarrGlue.png";
import pickleYarrGrass from "../assets/ferrets/pickle/yarrGrass.gif";
import snailsYarrDumpy from "../assets/ferrets/snails/yarrDumpy.gif";
import vincentDookThink from "../assets/ferrets/vincent/dookThink.gif";

// import snailsYarrDumpy from "../assets/ferrets/snails/yarrDumpy.png";

type OneToNine = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type ZeroToNine = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Percentage = `${ZeroToNine}%` | `${OneToNine}${ZeroToNine}%` | "100%";
type Position = `${Percentage} ${Percentage}`;

const isPercentage = (str: string): str is Percentage =>
  /^(100|[1-9]?[0-9])%$/.test(str);
const isPosition = (str: string): str is Position => {
  const [x, y, ...rest] = str.split(" ");
  return rest.length === 0 && !!x && !!y && isPercentage(x) && isPercentage(y);
};

type ImagePng = (typeof import("*.png"))["default"];
type ImageJpg = (typeof import("*.jpg"))["default"];
type ImageJpeg = (typeof import("*.jpeg"))["default"];
type ImageImport = ImagePng | ImageJpg | ImageJpeg;

// Manually set the type of the schema to avoid TS inferring `ImageImport` and `Position`
// We want `ImageImport` to retain its original type using `import` calls
// And we want `Position` to not be expanded into a massive union literal type
type ZodImageObject = z.ZodObject<{
  src: z.ZodType<ImageImport>;
  alt: z.ZodString;
  position: z.ZodOptional<z.ZodCustom<Position>>;
}>;

const isPositionSchema = z.custom<Position>(
  (val) => typeof val === "string" && isPosition(val),
  "must be a valid position string with two percentage values",
);

export const ferretImageSchema: ZodImageObject = z.object({
  src: z.custom<ImageImport>(),
  alt: z.string(),
  position: isPositionSchema.optional(),
});

export type FerretImage = z.infer<typeof ferretImageSchema>;
export type FerretImages = [FerretImage, ...FerretImage[]];

const ferretImages: Partial<{
  [key in FerretKey]: FerretImages;
}> = {
  badger: [
    {
      src: badgerImage1,
      alt: "",
    },
    {
      src: badgerImage2,
      alt: "Curly Badger",
    },
    {
      src: badgerImage3,
      alt: "Badger, Mushroom and a Snake",
    },
    {
      src: badgerImage4,
      alt: "Badger in a box of rice",
    },
    {
      src: badgerImage5,
      alt: "Vampire Moment",
    },
    {
      src: badgerImage6,
      alt: "Sleepy Badger",
    },
    {
      src: badgerImage7,
      alt: "",
    },
    {
      src: badgerImage8,
      alt: "Badger splooting",
    },
  ],
  beans: [
    {
      src: beansImage1,
      alt: "Baby Beans",
    },
    {
      src: beansImage2,
      alt: "Baby beans",
    },
    {
      src: beansImage3,
      alt: "",
    },
    {
      src: beansImage4,
      alt: "Drawing by Shaye",
    },
    {
      src: beansImage5,
      alt: "Beans Jail",
    },
    {
      src: beansImage6,
      alt: "Beans having snuck into genpop is busted by Shaye",
    },
    {
      src: beansImage7,
      alt: "Beans hunts squeaky toy from cage",
    },
    {
      src: beansImage8,
      alt: "Your a wizard beans.",
    },
    {
      src: beansImage9,
      alt: "",
    },
    {
      src: beansImage10,
      alt: "Beans Wizard Hat",
    },
    {
      src: beansImage11,
      alt: "Beans attack the snek",
    },
    {
      src: beansImage12,
      alt: "Beans attack the snek",
    },
    {
      src: beansImage13,
      alt: "Beware of Beans",
    },
    {
      src: beansImage14,
      alt: "Beans is chill",
    },
    {
      src: beansImage15,
      alt: "Chonky boi",
    },
    {
      src: beansImage16,
      alt: "Beans cleans",
    },
    {
      src: beansImage17,
      alt: "",
    },
    {
      src: beansImage18,
      alt: "",
    },
    {
      src: beansImage19,
      alt: "",
    },
    {
      src: beansImage20,
      alt: "",
    },
    {
      src: beansImage21,
      alt: "",
    },
    {
      src: beansImage22,
      alt: "Beans dreams",
    },
    {
      src: beansImage23,
      alt: "Beans being a fatass",
    },
    {
      src: beansImage24,
      alt: "",
    },
    {
      src: beansImage25,
      alt: "Beans is liquid",
    },
    {
      src: beansImage26,
      alt: "Mlem",
    },
    {
      src: beansImage27,
      alt: "Mlem",
    },
    {
      src: beansImage28,
      alt: "Photogenic Beans",
    },
    {
      src: beansImage29,
      alt: "",
    },
    {
      src: beansImage30,
      alt: "Plotting and scheming",
    },
    {
      src: beansImage31,
      alt: "Beans enjoying the sun",
    },
    {
      src: beansImage32,
      alt: "Whaaaaagghh!",
    },
    {
      src: beansImage33,
      alt: "Beans the dumbass drawing by Shaye",
    },
    {
      src: beansImage34,
      alt: "Long beans!",
    },
    {
      src: beansImage35,
      alt: "Beans after a bath",
    },
    {
      src: beansImage36,
      alt: "visit wet-world with Beef, Cheese, Loki, Snails",
    },
    {
      src: beansImage37,
      alt: "Beans sleeping in Superman position",
    },
    {
      src: beansImage38,
      alt: "Beans, Demeter, Jinx and Kahlua in the Toy-Basket",
    },
    {
      src: beansImage39,
      alt: "Eddie poops on Beans * (And Short Link )",
    },
    {
      src: beansImage40,
      alt: "Beans getting kissies",
    },
    {
      src: beansImage41,
      alt: "Beans and Onion drawing by Shaye",
    },
    {
      src: beansImage42,
      alt: "Beans laying on Onion",
    },
    {
      src: beansImage43,
      alt: "Beans and Onion snake mode drawing by Spice Link",
    },
    {
      src: beansImage44,
      alt: "Peanut demands the sun spot",
    },
    {
      src: beansImage45,
      alt: "Peanut has been spotted",
    },
    {
      src: beansImage46,
      alt: "Beans and Peanut share a penthouse",
    },
  ],
  beef: [
    {
      src: beefImage1,
      alt: "",
    },
    {
      src: beefImage2,
      alt: "Beef and Cheese first pictures",
    },
    {
      src: beefImage3,
      alt: "Beef and Cheese first pictures",
    },
    {
      src: beefImage4,
      alt: "",
    },
    {
      src: beefImage5,
      alt: "Mlem!",
    },
    {
      src: beefImage6,
      alt: "Beef in the petstore",
    },
    {
      src: beefImage7,
      alt: "Beef seasonal receding hairline",
    },
    {
      src: beefImage8,
      alt: "",
    },
    {
      src: beefImage9,
      alt: "",
    },
    {
      src: beefImage10,
      alt: "",
    },
    {
      src: beefImage11,
      alt: "",
    },
    {
      src: beefImage12,
      alt: "Some wet Beef",
    },
  ],
  bigmike: [
    {
      src: bigmikeImage1,
      alt: "Big Mike in his bed",
    },
    {
      src: bigmikeImage2,
      alt: "Big Mike climbs his cage",
    },
    {
      src: bigmikeImage3,
      alt: "Smol blep from big mike",
    },
  ],
  bruce: [
    {
      src: bruceImage1,
      alt: "",
    },
    {
      src: bruceImage2,
      alt: "",
    },
    {
      src: bruceImage3,
      alt: "",
    },
    {
      src: bruceImage4,
      alt: "",
    },
    {
      src: bruceImage5,
      alt: "",
    },
  ],
  cowboy: [
    {
      src: cowboyImage1,
      alt: "Henry cuddling Cowboy",
    },
  ],
  demeter: [
    {
      src: demeterImage1,
      alt: "Beans, Demeter, Jinx and Kahlua in the Toy-Basket",
    },
  ],
  eddie: [
    {
      src: eddieImage1,
      alt: "Eddie poops on Beans * (And Short Link )",
    },
    {
      src: eddieImage2,
      alt: "Eppy henry and cuddle fren eddie",
    },
  ],
  fig: [
    {
      src: figImage1,
      alt: "Fig (Left) and Henry (Right) Snuggle in Hunny Pot",
    },
    {
      src: figImage2,
      alt: "Fig love henry",
    },
    {
      src: figImage3,
      alt: "Henry (left) and Fig (right) cuddles",
    },
  ],
  henry: [
    {
      src: henryImage1,
      alt: "",
    },
    {
      src: henryImage2,
      alt: "",
    },
    {
      src: henryImage3,
      alt: "",
    },
    {
      src: henryImage4,
      alt: "",
    },
    {
      src: henryImage5,
      alt: "",
    },
    {
      src: henryImage6,
      alt: "Grandpa and Henry",
    },
    {
      src: henryImage7,
      alt: "Henry bearing axolotls for soup noms.",
    },
    {
      src: henryImage8,
      alt: "Henry comfy",
    },
    {
      src: henryImage9,
      alt: "",
    },
    {
      src: henryImage10,
      alt: "Henry Snuggles in Hunny Pot",
    },
    {
      src: henryImage11,
      alt: "Henry making big steppies",
    },
    {
      src: henryImage12,
      alt: "Henry photoshoot by shaye part one",
    },
    {
      src: henryImage13,
      alt: "Henry photoshoot by shaye part two",
    },
    {
      src: henryImage14,
      alt: "Henry photoshoot by shaye part three",
    },
    {
      src: henryImage15,
      alt: "Henry photoshoot by shaye part four",
    },
    {
      src: henryImage16,
      alt: "Henry photoshoot by shaye part five, he on the way to steal your heart.",
    },
    {
      src: henryImage17,
      alt: "Henry photoshoot by shaye part six",
    },
    {
      src: henryImage18,
      alt: "Stand by, henry recharging.",
    },
    {
      src: henryImage19,
      alt: "Henry turned Pretzel",
    },
    {
      src: henryImage20,
      alt: "Henry playing in some rice, unsure if liked",
    },
    {
      src: henryImage21,
      alt: "eepy Henry on a rug",
    },
    {
      src: henryImage22,
      alt: "Henry goes back to sleep land",
    },
    {
      src: henryImage23,
      alt: "Henry eepy",
    },
    {
      src: henryImage24,
      alt: "Henry sleep distrubed by camera",
    },
    {
      src: henryImage25,
      alt: "Henry speaks to us again!",
    },
    {
      src: henryImage26,
      alt: "Henry toobs",
    },
    {
      src: henryImage27,
      alt: "Grandpa hidden under Henry",
    },
    {
      src: henryImage28,
      alt: "Henry loves the frog",
    },
    {
      src: henryImage29,
      alt: "Henry and the frog",
    },
    {
      src: henryImage30,
      alt: "",
    },
    {
      src: henryImage31,
      alt: "",
    },
    {
      src: henryImage32,
      alt: "henry the perfect cinnamon roll.",
    },
    {
      src: henryImage33,
      alt: "Henry with his froggy hat being very eepy",
    },
    {
      src: henryImage34,
      alt: "Henry with his froggy hat, so very eepy",
    },
    {
      src: henryImage35,
      alt: "Henry with his froggy hat",
    },
    {
      src: henryImage36,
      alt: "The egg-o monster",
    },
    {
      src: henryImage37,
      alt: "Henry with tiny frog hat",
    },
    {
      src: henryImage38,
      alt: "Gangstah",
    },
    {
      src: henryImage39,
      alt: "Henry halloween, very spook",
    },
    {
      src: henryImage40,
      alt: "Henry's satisfying poop face",
    },
    {
      src: henryImage41,
      alt: "Poop stance",
    },
    {
      src: henryImage42,
      alt: "Henry sleeping under blanky",
    },
    {
      src: henryImage43,
      alt: "Sleepy boi!",
    },
    {
      src: henryImage44,
      alt: "Henry slipping in!",
    },
    {
      src: henryImage45,
      alt: "Solo sooping without support",
    },
    {
      src: henryImage46,
      alt: "Henry held infront of a bush",
    },
    {
      src: henryImage47,
      alt: "Henry touches grass, finds it comfy",
    },
    {
      src: henryImage48,
      alt: "Henry touches grass",
    },
    {
      src: henryImage49,
      alt: "Henry touches grass, confirmed not a vtuber",
    },
    {
      src: henryImage50,
      alt: "Henry in a tree, doing a explore",
    },
    {
      src: henryImage51,
      alt: "",
    },
    {
      src: henryImage52,
      alt: "Very sleepy",
    },
    {
      src: henryImage53,
      alt: "Long wisker",
    },
    {
      src: henryImage54,
      alt: "Henry speaks to us",
    },
    {
      src: henryImage55,
      alt: "Henry fell into the soup",
    },
    {
      src: henryImage56,
      alt: "Drawing of henry",
    },
    {
      src: henryImage57,
      alt: "Henry being the perfect cinnamon roll",
    },
    {
      src: henryImage58,
      alt: "Sleepy cinnamon roll henry.",
    },
    {
      src: henryImage59,
      alt: "Henry very sleepy with toy",
    },
    {
      src: henryImage60,
      alt: "henry eeps in the frogo bed",
    },
    {
      src: henryImage61,
      alt: "Henry cuddling Cowboy",
    },
    {
      src: henryImage62,
      alt: "Eppy henry and cuddle fren eddie",
    },
    {
      src: henryImage63,
      alt: "Fig (Left) and Henry (Right) Snuggle in Hunny Pot",
    },
    {
      src: henryImage64,
      alt: "Fig love henry",
    },
    {
      src: henryImage65,
      alt: "Henry (left) and Fig (right) cuddles",
    },
    {
      src: henryImage66,
      alt: "Snuggling together with Mocha",
    },
    {
      src: henryImage67,
      alt: "Henry cuddling Mocha",
    },
    {
      src: henryImage68,
      alt: "Henry sleep with moxie under blanket",
    },
    {
      src: henryImage69,
      alt: "Moxie is Henry's scarf",
    },
    {
      src: henryImage70,
      alt: "Teep grooming Henry",
    },
  ],
  jinx: [
    {
      src: jinxImage1,
      alt: "Beans, Demeter, Jinx and Kahlua in the Toy-Basket",
    },
  ],
  kahlua: [
    {
      src: kahluaImage1,
      alt: "Beans, Demeter, Jinx and Kahlua in the Toy-Basket",
    },
  ],
  mocha: [
    {
      src: mochaImage1,
      alt: "Snuggling together with Mocha",
    },
    {
      src: mochaImage2,
      alt: "Henry cuddling Mocha",
    },
  ],
  mouse: [
    {
      src: mouseImage1,
      alt: "Beans getting kissies",
    },
  ],
  moxie: [
    {
      src: moxieImage1,
      alt: "Henry sleep with moxie under blanket",
    },
    {
      src: moxieImage2,
      alt: "Moxie is Henry's scarf",
    },
  ],
  onion: [
    {
      src: onionImage1,
      alt: "Beans and Onion drawing by Shaye",
    },
    {
      src: onionImage2,
      alt: "Beans laying on Onion",
    },
    {
      src: onionImage3,
      alt: "Beans and Onion snake mode drawing by Spice Link",
    },
  ],
  peanut: [
    {
      src: peanutImage1,
      alt: "Peanut demands the sun spot",
    },
    {
      src: peanutImage2,
      alt: "Peanut has been spotted",
    },
    {
      src: peanutImage3,
      alt: "Beans and Peanut share a penthouse",
    },
  ],
  teep: [
    {
      src: teepImage1,
      alt: "Teep grooming Henry",
    },
  ],
};

export const getFerretImages = ((ferret: FerretKey | string) => {
  if (!isFerretKey(ferret)) return undefined;
  return ferretImages[ferret];
}) as ((ferret: FerretKey) => FerretImages) &
  ((ferret: string) => FerretImages | undefined);

// Partial since new ferrets may be added without images
const ferretMugshots: {
  [key in FerretKey]: FerretImage;
} = {
  badger: {
    src: badgerMugshot,
    alt: "Mugshot of Badger",
  },
  bagel: {
    src: bagelMugshot,
    alt: "Mugshot of Bagel",
  },
  banana: {
    src: bananaMugshot,
    alt: "Mugshot of Banana",
  },
  bandit: {
    src: banditMugshot,
    alt: "Mugshot of Bandit",
  },
  beans: {
    src: beansMugshot,
    alt: "Mugshot of Beans",
  },
  beef: {
    src: beefMugshot,
    alt: "Mugshot of Beef",
  },
  bigmike: {
    src: bigmikeMugshot,
    alt: "Mugshot of Big Mike",
  },
  bruce: {
    src: bruceMugshot,
    alt: "Mugshot of Bruce",
  },
  cashew: {
    src: cashewMugshot,
    alt: "Mugshot of Cashew",
  },
  cheese: {
    src: cheeseMugshot,
    alt: "Mugshot of Cheese",
  },
  chili: {
    src: chiliMugshot,
    alt: "Mugshot of Chili",
  },
  cowboy: {
    src: cowboyMugshot,
    alt: "Mugshot of Cowboy",
  },
  demeter: {
    src: demeterMugshot,
    alt: "Mugshot of Demeter",
  },
  eddie: {
    src: eddieMugshot,
    alt: "Mugshot of Eddie",
  },
  felix: {
    src: felixMugshot,
    alt: "Mugshot of Felix",
  },
  fig: {
    src: figMugshot,
    alt: "Mugshot of Fig",
  },
  finn: {
    src: finnMugshot,
    alt: "Mugshot of Finn",
  },
  ghost: {
    src: ghostMugshot,
    alt: "Mugshot of Ghost",
  },
  hazelnut: {
    src: hazelnutMugshot,
    alt: "Mugshot of Hazelnut",
  },
  henry: {
    src: henryMugshot,
    alt: "Mugshot of Henry",
  },
  jack: {
    src: jackMugshot,
    alt: "Mugshot of Jack",
  },
  jasmine: {
    src: jasmineMugshot,
    alt: "Mugshot of Jasmine",
  },
  jinx: {
    src: jinxMugshot,
    alt: "Mugshot of Jinx",
  },
  kahlua: {
    src: kahluaMugshot,
    alt: "Mugshot of Kahlua",
  },
  kitty: {
    src: kittyMugshot,
    alt: "Mugshot of Kitty",
  },
  kylo: {
    src: kyloMugshot,
    alt: "Mugshot of Kylo",
  },
  kyo: {
    src: kyoMugshot,
    alt: "Mugshot of Kyo",
  },
  latte: {
    src: latteMugshot,
    alt: "Mugshot of Latte",
  },
  loki: {
    src: lokiMugshot,
    alt: "Mugshot of Loki",
  },
  louise: {
    src: louiseMugshot,
    alt: "Mugshot of Louise",
  },
  lucky: {
    src: luckyMugshot,
    alt: "Mugshot of Lucky",
  },
  luna: {
    src: lunaMugshot,
    alt: "Mugshot of Luna",
  },
  maisy: {
    src: maisyMugshot,
    alt: "Mugshot of Maisy",
  },
  maitai: {
    src: maitaiMugshot,
    alt: "Mugshot of Mai Tai",
  },
  max: {
    src: maxMugshot,
    alt: "Mugshot of Max",
  },
  milo: {
    src: miloMugshot,
    alt: "Mugshot of Milo",
  },
  mimosa: {
    src: mimosaMugshot,
    alt: "Mugshot of Mimosa",
  },
  mishka: {
    src: mishkaMugshot,
    alt: "Mugshot of Mishka",
  },
  mistoffelees: {
    src: mistoffeleesMugshot,
    alt: "Mugshot of Mistoffelees",
  },
  mocha: {
    src: mochaMugshot,
    alt: "Mugshot of Mocha",
  },
  moose: {
    src: mooseMugshot,
    alt: "Mugshot of Moose",
  },
  mouse: {
    src: mouseMugshot,
    alt: "Mugshot of Mouse",
  },
  moxie: {
    src: moxieMugshot,
    alt: "Mugshot of Moxie",
  },
  nacho: {
    src: nachoMugshot,
    alt: "Mugshot of Nacho",
  },
  odin: {
    src: odinMugshot,
    alt: "Mugshot of Odin",
  },
  onion: {
    src: onionMugshot,
    alt: "Mugshot of Onion",
  },
  peanut: {
    src: peanutMugshot,
    alt: "Mugshot of Peanut",
  },
  peanut2: {
    src: peanut2Mugshot,
    alt: "Mugshot of Peanut 2",
  },
  peepo: {
    src: peepoMugshot,
    alt: "Mugshot of Peepo",
  },
  pepper: {
    src: pepperMugshot,
    alt: "Mugshot of Pepper",
  },
  pepper2: {
    src: pepper2Mugshot,
    alt: "Mugshot of Pepper 2",
  },
  pickle: {
    src: pickleMugshot,
    alt: "Mugshot of Pickle",
  },
  rose: {
    src: roseMugshot,
    alt: "Mugshot of Rose",
  },
  roxy: {
    src: roxyMugshot,
    alt: "Mugshot of Roxy",
  },
  rusty: {
    src: rustyMugshot,
    alt: "Mugshot of Rusty",
  },
  sai: {
    src: saiMugshot,
    alt: "Mugshot of Sai",
  },
  salsa: {
    src: salsaMugshot,
    alt: "Mugshot of Salsa",
  },
  salt: {
    src: saltMugshot,
    alt: "Mugshot of Salt",
  },
  salt2: {
    src: salt2Mugshot,
    alt: "Mugshot of Salt 2",
  },
  scotch: {
    src: scotchMugshot,
    alt: "Mugshot of Scotch",
  },
  skye: {
    src: skyeMugshot,
    alt: "Mugshot of Skye",
  },
  snails: {
    src: snailsMugshot,
    alt: "Mugshot of Snails",
  },
  snowball: {
    src: snowballMugshot,
    alt: "Mugshot of Snowball",
  },
  spud: {
    src: spudMugshot,
    alt: "Mugshot of Spud",
  },
  teep: {
    src: teepMugshot,
    alt: "Mugshot of Teep",
  },
  thelma: {
    src: thelmaMugshot,
    alt: "Mugshot of Thelma",
  },
  toby: {
    src: tobyMugshot,
    alt: "Mugshot of Toby",
  },
  torch: {
    src: torchMugshot,
    alt: "Mugshot of Torch",
  },
  tortilla: {
    src: tortillaMugshot,
    alt: "Mugshot of Tortilla",
  },
  vincent: {
    src: vincentMugshot,
    alt: "Mugshot of Vincent",
  },
  whiskey: {
    src: whiskeyMugshot,
    alt: "Mugshot of Whiskey",
  },
  zero: {
    src: zeroMugshot,
    alt: "Mugshot of Zero",
  },
};

export const getFerretMugshot = (
  ferret: FerretKey | string,
): FerretImage | undefined => {
  if (!isFerretKey(ferret)) return undefined;
  return ferretMugshots[ferret];
};

const ferretEmoteImages: Partial<{
  [key in FerretKey]: FerretImages;
}> = {
  beans: [
    {
      src: beansYarrAww,
      alt: "Beans's yarrAww emote",
    },
    {
      src: beansYarrBeans,
      alt: "Beans's yarrBeans emote",
    },
    {
      src: beansYarrBite,
      alt: "Beans's yarrBite emote",
    },
    {
      src: beansYarrBluh,
      alt: "Beans's yarrBluh emote",
    },
    {
      src: beansYarrBrows,
      alt: "Beans's yarrBrows emote",
    },
    {
      src: beansYarrChaos,
      alt: "Beans's yarrChaos emote",
    },
    {
      src: beansYarrChatMD,
      alt: "Beans's yarrChatMD emote",
    },
    {
      src: beansYarrComfy,
      alt: "Beans's yarrComfy emote",
    },
    {
      src: beansYarrCult,
      alt: "Beans's yarrCult emote",
    },
    {
      src: beansYarrCultist,
      alt: "Beans's yarrCultist emote",
    },
    {
      src: beansYarrD,
      alt: "Beans's yarrD emote",
    },
    {
      src: beansYarrDance,
      alt: "Beans's yarrDance emote",
    },
    {
      src: beansYarrDemocracy,
      alt: "Beans's yarrDemocracy emote",
    },
    {
      src: beansYarrFear,
      alt: "Beans's yarrFear emote",
    },
    {
      src: beansYarrFine,
      alt: "Beans's yarrFine emote",
    },
    {
      src: beansYarrHey,
      alt: "Beans's yarrHey emote",
    },
    {
      src: beansYarrHmm,
      alt: "Beans's yarrHmm emote",
    },
    {
      src: beansYarrHype,
      alt: "Beans's yarrHype emote",
    },
    {
      src: beansYarrLick,
      alt: "Beans's yarrLick emote",
    },
    {
      src: beansYarrLook,
      alt: "Beans's yarrLook emote",
    },
    {
      src: beansYarrLove,
      alt: "Beans's yarrLove emote",
    },
    {
      src: beansYarrLUL,
      alt: "Beans's yarrLUL emote",
    },
    {
      src: beansYarrMYAA,
      alt: "Beans's yarrMYAA emote",
    },
    {
      src: beansYarrNerd,
      alt: "Beans's yarrNerd emote",
    },
    {
      src: beansYarrNodders,
      alt: "Beans's yarrNodders emote",
    },
    {
      src: beansYarrNotes,
      alt: "Beans's yarrNotes emote",
    },
    {
      src: beansYarrPet,
      alt: "Beans's yarrPet emote",
    },
    {
      src: beansYarrPrime,
      alt: "Beans's yarrPrime emote",
    },
    {
      src: beansYarrRabid,
      alt: "Beans's yarrRabid emote",
    },
    {
      src: beansYarrRad,
      alt: "Beans's yarrRad emote",
    },
    {
      src: beansYarrSadge,
      alt: "Beans's yarrSadge emote",
    },
    {
      src: beansYarrSalute,
      alt: "Beans's yarrSalute emote",
    },
    {
      src: beansYarrSip,
      alt: "Beans's yarrSip emote",
    },
    {
      src: beansYarrSpicy,
      alt: "Beans's yarrSpicy emote",
    },
    {
      src: beansYarrStinks,
      alt: "Beans's yarrStinks emote",
    },
    {
      src: beansYarrStinky,
      alt: "Beans's yarrStinky emote",
    },
    {
      src: beansYarrStonks,
      alt: "Beans's yarrStonks emote",
    },
    {
      src: beansYarrWave,
      alt: "Beans's yarrWave emote",
    },
    {
      src: beansYarrWhy,
      alt: "Beans's yarrWhy emote",
    },
    {
      src: beansYarrWOW,
      alt: "Beans's yarrWOW emote",
    },
  ],
  lucky: [
    {
      src: luckyDookSniff,
      alt: "Lucky's dookSniff emote",
    },
  ],
  mouse: [
    {
      src: mouseDookHype,
      alt: "Mouse's dookHype emote",
    },
    {
      src: mouseDookLurk,
      alt: "Mouse's dookLurk emote",
    },
  ],
  pickle: [
    {
      src: pickleDookReally,
      alt: "Pickle's dookReally emote",
    },
    {
      src: pickleYarrBongos,
      alt: "Pickle's yarrBongos emote",
    },
    {
      src: pickleYarrGlue,
      alt: "Pickle's yarrGlue emote",
    },
    {
      src: pickleYarrGrass,
      alt: "Pickle's yarrGrass emote",
    },
  ],
  snails: [
    {
      src: snailsYarrDumpy,
      alt: "Snails's yarrDumpy emote",
    },
  ],
  vincent: [
    {
      src: vincentDookThink,
      alt: "Vincent's dookThink emote",
    },
  ],
};

export const getFerretEmoteImages = (
  ferret: FerretKey | string,
): FerretImages | undefined => {
  if (!isFerretKey(ferret)) return undefined;
  return ferretEmoteImages[ferret];
};
