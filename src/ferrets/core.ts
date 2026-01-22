import { z } from "zod";

import { birthdayStringSchema, partialDateStringSchema } from "../types";
import { imageSchema, imageSrcSchema } from "./images";

export const ferretSchema = z.object({
  name: z.string(),
  wikipage: z.string().regex(/^[a-zA-Z0-9\-._~:/?#\[\]@!$&'()*+,;=]+$/),
  aliases: z.array(z.string()).readonly(),
  commands: z.array(z.string()).readonly(),
  sex: z.literal(["Male", "Female"]).nullable(),
  birth: partialDateStringSchema.nullable(),
  birthday: birthdayStringSchema.nullable(),
  arrival: partialDateStringSchema.nullable(),
  valhalla: partialDateStringSchema.nullable(),
  playgroup: z.string(),
  summary: z.string().optional(),
  lore: z.string().optional(),
  clips: z
    .array(
      z.object({
        url: z.string(),
        caption: z.string(),
      }),
    )
    .readonly(),
  mugshot: imageSrcSchema.nullable(),
  images: z.array(imageSchema).readonly(),
  merch: z
    .array(
      z.object({
        name: z.string(),
        description: z.string().optional(),
        url: z.url().optional(),
      }),
    )
    .readonly(),
});

export type Ferret = z.infer<typeof ferretSchema>;
