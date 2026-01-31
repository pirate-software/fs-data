import { z } from "zod";
import { imageSrcSchema } from "./images";

export const playgroupSchema = z.object({
  name: z.string(),
  tooltip: z.string(),
  description: z.string(),
  image: imageSrcSchema,
});

export type Playgroup = z.infer<typeof playgroupSchema>;
