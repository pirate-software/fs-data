import { z } from "zod";

import { pathSchema } from "../types";

type OneToNine = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type ZeroToNine = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Percentage = `${ZeroToNine}%` | `${OneToNine}${ZeroToNine}%` | "100%";
type Position = `${Percentage} ${Percentage}`;
const imageSuffixes = [
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".webp",
  ".avif",
  ".svg",
];

export const positionSchema = z.custom<Position>(
  (value) => typeof value === "string" && isPosition(value),
  "must be a valid position string (e.g., '50% 50%')",
);

const isPercentage = (str: string): str is Percentage =>
  /^(100|[1-9]?[0-9])%$/.test(str);
const isPosition = (str: string): str is Position => {
  const [x, y, ...rest] = str.split(" ");
  return rest.length === 0 && !!x && !!y && isPercentage(x) && isPercentage(y);
};

const endWithSuffixRegex = new RegExp(
  `(${imageSuffixes.map((s) => `\\${s}`).join("|")})$`,
);
export const imagePathSchema = pathSchema.regex(endWithSuffixRegex);
export const imageUrlSchema = z.url().regex(endWithSuffixRegex);
export const imageSrcSchema = z.union([imagePathSchema, imageUrlSchema]);

export const imageSchema = z.object({
  src: imageSrcSchema,
  alt: z.string(),
  position: positionSchema.optional(),
});

export type FerretImage = z.infer<typeof imageSchema>;
