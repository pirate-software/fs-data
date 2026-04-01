import { z } from "zod";
import { imageSrcSchema } from "./images";
import { wikipageSchema } from "../types";

export const playgroupSchema = z.object({
  name: z.string(),
  wikipage: wikipageSchema,
  tooltip: z.string(),
  description: z.string(),
  image: imageSrcSchema,
  commands: z.array(z.string()).readonly(),
});

export type Playgroup = z.infer<typeof playgroupSchema>;
