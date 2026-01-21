import { z } from "zod";

import { birthdayStringSchema, partialDateStringSchema } from "../types";

export const ferretSchema = z.object({
  name: z.string(),
  wikipage: z.string(),
  aliases: z.array(z.string()).readonly(),
  commands: z.array(z.string()).readonly(),
  sex: z.literal(["Male", "Female"]).nullable(),
  birth: partialDateStringSchema.nullable(),
  birthday: birthdayStringSchema.nullable().optional(),
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
