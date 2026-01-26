import { z } from "zod";
import { ferretSchema } from "./ferrets/core";

export const SCHEMA_VERSION: number = 2 as const;
export const SCHEMA_VERSION_ID: string = "v" + SCHEMA_VERSION.toString();

export const apiSchema = z.object({
  ferrets: z.array(ferretSchema).readonly(),
});
export type ApiData = z.infer<typeof apiSchema>;
