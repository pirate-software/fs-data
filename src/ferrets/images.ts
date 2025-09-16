import { z } from "zod";

import { isFerretKey, type FerretKey } from "./core";

import beansMugshot from "../assets/ferrets/beans/mugshot.png";

import beansImage01 from "../assets/ferrets/beans/01.jpg";

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

// import picklesYarrBongos from "../assets/ferrets/pickles/yarrBongos.gif";
// import picklesYarrGlue from "../assets/ferrets/pickles/yarrGlue.png";
// import picklesYarrGrass from "../assets/ferrets/pickles/yarrGrass.gif";

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

const ferretImages: {
  [key in FerretKey]: FerretImages;
} = {
  beans: [
    {
      src: beansImage01,
      alt: "Beans and Onion snake mode drawing by Spice Link",
    },
  ],
  //TODO
};

export const getFerretImages = ((ferret: FerretKey | string) => {
  if (!isFerretKey(ferret)) return undefined;
  return ferretImages[ferret];
}) as ((ferret: FerretKey) => FerretImages) &
  ((ferret: string) => FerretImages | undefined);

// Partial since new ferrets may be added without images
export const ferretMugshots: Partial<{
  [key in FerretKey]: FerretImage;
}> = {
  beans: { src: beansMugshot, alt: "Beans Mugshot" },
  //TODO
};

export const getFerretMugshot = (
  ferret: FerretKey | string,
): FerretImage | undefined => {
  if (!isFerretKey(ferret)) return undefined;
  return ferretMugshots[ferret];
};

export const ferretEmoteImages: Partial<{
  [key in FerretKey]: FerretImages;
}> = {
  beans: [
    { src: beansYarrAww, alt: "yarrAww" },
    { src: beansYarrBeans, alt: "yarrBeans" },
    { src: beansYarrBite, alt: "yarrBite" },
    { src: beansYarrBluh, alt: "yarrBluh" },
    { src: beansYarrBrows, alt: "yarrBrows" },
    { src: beansYarrChaos, alt: "yarrChaos" },
    { src: beansYarrChatMD, alt: "yarrChatMD" },
    { src: beansYarrComfy, alt: "yarrComfy" },
    { src: beansYarrCult, alt: "yarrCult" },
    { src: beansYarrCultist, alt: "yarrCultist" },
    { src: beansYarrD, alt: "yarrD" },
    { src: beansYarrDance, alt: "yarrDance" },
    { src: beansYarrDemocracy, alt: "yarrDemocracy" },
    { src: beansYarrFear, alt: "yarrFear" },
    { src: beansYarrFine, alt: "yarrFine" },
    { src: beansYarrHey, alt: "yarrHey" },
    { src: beansYarrHmm, alt: "yarrHmm" },
    { src: beansYarrHype, alt: "yarrHype" },
    { src: beansYarrLick, alt: "yarrLick" },
    { src: beansYarrLook, alt: "yarrLook" },
    { src: beansYarrLove, alt: "yarrLove" },
    { src: beansYarrLUL, alt: "yarrLUL" },
    { src: beansYarrMYAA, alt: "yarrMYAA" },
    { src: beansYarrNerd, alt: "yarrNerd" },
    { src: beansYarrNodders, alt: "yarrNodders" },
    { src: beansYarrNotes, alt: "yarrNotes" },
    { src: beansYarrPet, alt: "yarrPet" },
    { src: beansYarrPrime, alt: "yarrPrime" },
    { src: beansYarrRabid, alt: "yarrRabid" },
    { src: beansYarrRad, alt: "yarrRad" },
    { src: beansYarrSadge, alt: "yarrSadge" },
    { src: beansYarrSalute, alt: "yarrSalute" },
    { src: beansYarrSip, alt: "yarrSip" },
    { src: beansYarrSpicy, alt: "yarrSpicy" },
    { src: beansYarrStinks, alt: "yarrStinks" },
    { src: beansYarrStinky, alt: "yarrStinky" },
    { src: beansYarrStonks, alt: "yarrStonks" },
    { src: beansYarrWave, alt: "yarrWave" },
    { src: beansYarrWhy, alt: "yarrWhy" },
    { src: beansYarrWOW, alt: "yarrWOW" },
  ],
  // pickles: [
  //   { src: picklesYarrBongos, alt: "yarrBongos" },
  //   { src: picklesYarrGlue, alt: "yarrGlue" },
  //   { src: picklesYarrGrass, alt: "yarrGrass" },
  // ],
  // snails: [
  //   { src: snailsYarrDumpy, alt: "yarrDumpy" },
  // ],
};

export const getFerretEmoteImages = (
  ferret: FerretKey | string,
): FerretImages | undefined => {
  if (!isFerretKey(ferret)) return undefined;
  return ferretEmoteImages[ferret];
};
