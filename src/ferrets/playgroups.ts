import { z } from "zod";

export const playgroupSchema = z.object({
  name: z.string(),
  description: z.string(),
});

export type Playgroup = z.infer<typeof playgroupSchema>;
