import { z } from "zod";

import { isFerretKey, type FerretKey } from "./core";

import ashMugshot from "../assets/ferrets/ash/mugshot.png";
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
import enokiMugshot from "../assets/ferrets/enoki/mugshot.png";
import felixMugshot from "../assets/ferrets/felix/mugshot.png";
import figMugshot from "../assets/ferrets/fig/mugshot.png";
import finchMugshot from "../assets/ferrets/finch/mugshot.png";
import finnMugshot from "../assets/ferrets/finn/mugshot.png";
import ghostMugshot from "../assets/ferrets/ghost/mugshot.png";
import hazelnutMugshot from "../assets/ferrets/hazelnut/mugshot.png";
import henryMugshot from "../assets/ferrets/henry/mugshot.png";
import jackMugshot from "../assets/ferrets/jack/mugshot.png";
import jasmineMugshot from "../assets/ferrets/jasmine/mugshot.png";
import jinxMugshot from "../assets/ferrets/jinx/mugshot.png";
import juniperMugshot from "../assets/ferrets/juniper/mugshot.png";
import kahluaMugshot from "../assets/ferrets/kahlua/mugshot.png";
import kittyMugshot from "../assets/ferrets/kitty/mugshot.png";
import kyloMugshot from "../assets/ferrets/kylo/mugshot.png";
import kyoMugshot from "../assets/ferrets/kyo/mugshot.png";
import latteMugshot from "../assets/ferrets/latte/mugshot.png";
import lokiMugshot from "../assets/ferrets/loki/mugshot.png";
import louiseMugshot from "../assets/ferrets/louise/mugshot.png";
import lucasMugshot from "../assets/ferrets/lucas/mugshot.png";
import luckyMugshot from "../assets/ferrets/lucky/mugshot.png";
import luluMugshot from "../assets/ferrets/lulu/mugshot.png";
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
import namekoMugshot from "../assets/ferrets/nameko/mugshot.png";
import nemoMugshot from "../assets/ferrets/nemo/mugshot.png";
import noodleMugshot from "../assets/ferrets/noodle/mugshot.png";
import odinMugshot from "../assets/ferrets/odin/mugshot.png";
import onionMugshot from "../assets/ferrets/onion/mugshot.png";
import peanutMugshot from "../assets/ferrets/peanut/mugshot.png";
import peanut2Mugshot from "../assets/ferrets/peanut2/mugshot.png";
import peepoMugshot from "../assets/ferrets/peepo/mugshot.png";
import pepperMugshot from "../assets/ferrets/pepper/mugshot.png";
import pepper2Mugshot from "../assets/ferrets/pepper2/mugshot.png";
import pickleMugshot from "../assets/ferrets/pickle/mugshot.png";
import roseMugshot from "../assets/ferrets/rose/mugshot.png";
import rowanMugshot from "../assets/ferrets/rowan/mugshot.png";
import roxyMugshot from "../assets/ferrets/roxy/mugshot.png";
import rustyMugshot from "../assets/ferrets/rusty/mugshot.png";
import ryeMugshot from "../assets/ferrets/rye/mugshot.png";
import saiMugshot from "../assets/ferrets/sai/mugshot.png";
import salsaMugshot from "../assets/ferrets/salsa/mugshot.png";
import saltMugshot from "../assets/ferrets/salt/mugshot.png";
import salt2Mugshot from "../assets/ferrets/salt2/mugshot.png";
import scotchMugshot from "../assets/ferrets/scotch/mugshot.png";
import skyeMugshot from "../assets/ferrets/skye/mugshot.png";
import snailsMugshot from "../assets/ferrets/snails/mugshot.png";
import snowballMugshot from "../assets/ferrets/snowball/mugshot.png";
import snowberryMugshot from "../assets/ferrets/snowberry/mugshot.png";
import spudMugshot from "../assets/ferrets/spud/mugshot.png";
import stinkyMugshot from "../assets/ferrets/stinky/mugshot.png";
import teepMugshot from "../assets/ferrets/teep/mugshot.png";
import thelmaMugshot from "../assets/ferrets/thelma/mugshot.png";
import tobyMugshot from "../assets/ferrets/toby/mugshot.png";
import torchMugshot from "../assets/ferrets/torch/mugshot.png";
import tortillaMugshot from "../assets/ferrets/tortilla/mugshot.png";
import vincentMugshot from "../assets/ferrets/vincent/mugshot.png";
import whiskeyMugshot from "../assets/ferrets/whiskey/mugshot.png";
import zeroMugshot from "../assets/ferrets/zero/mugshot.png";

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
}> = {};

export const getFerretImages = ((ferret: FerretKey | string) => {
  if (!isFerretKey(ferret)) return undefined;
  return ferretImages[ferret];
}) as ((ferret: FerretKey) => FerretImages) &
  ((ferret: string) => FerretImages | undefined);

// Partial since new ferrets may be added without images
const ferretMugshots: {
  [key in FerretKey]: FerretImage;
} = {
  ash: {
    src: ashMugshot,
    alt: "Mugshot of Ash",
  },
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
  enoki: {
    src: enokiMugshot,
    alt: "Mugshot of Enoki",
  },
  felix: {
    src: felixMugshot,
    alt: "Mugshot of Felix",
  },
  fig: {
    src: figMugshot,
    alt: "Mugshot of Fig",
  },
  finch: {
    src: finchMugshot,
    alt: "Mugshot of Finch",
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
  juniper: {
    src: juniperMugshot,
    alt: "Mugshot of Juniper",
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
  lucas: {
    src: lucasMugshot,
    alt: "Mugshot of Lucas",
  },
  lucky: {
    src: luckyMugshot,
    alt: "Mugshot of Lucky",
  },
  lulu: {
    src: luluMugshot,
    alt: "Mugshot of Lulu",
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
  nameko: {
    src: namekoMugshot,
    alt: "Mugshot of Nameko",
  },
  nemo: {
    src: nemoMugshot,
    alt: "Mugshot of Nemo",
  },
  noodle: {
    src: noodleMugshot,
    alt: "Mugshot of Noodle",
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
  rowan: {
    src: rowanMugshot,
    alt: "Mugshot of Rowan",
  },
  roxy: {
    src: roxyMugshot,
    alt: "Mugshot of Roxy",
  },
  rusty: {
    src: rustyMugshot,
    alt: "Mugshot of Rusty",
  },
  rye: {
    src: ryeMugshot,
    alt: "Mugshot of Rye",
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
  snowberry: {
    src: snowberryMugshot,
    alt: "Mugshot of Snowberry",
  },
  spud: {
    src: spudMugshot,
    alt: "Mugshot of Spud",
  },
  stinky: {
    src: stinkyMugshot,
    alt: "Mugshot of Stinky",
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
}> = {};

export const getFerretEmoteImages = (
  ferret: FerretKey | string,
): FerretImages | undefined => {
  if (!isFerretKey(ferret)) return undefined;
  return ferretEmoteImages[ferret];
};
