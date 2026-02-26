import { z } from "zod";
import { ferretSchema } from "./ferrets/ferrets";
import { playgroupSchema } from "./ferrets/playgroups";

export const SCHEMA_VERSION: number = 2 as const;
export const SCHEMA_VERSION_ID: string = "v" + SCHEMA_VERSION.toString();

export const ferretsApiSchema = z.object({
  ferrets: z.record(z.string(), ferretSchema).readonly(),
  playgroups: z.record(z.string(), playgroupSchema).readonly(),
});
export type FerretsApiData = z.infer<typeof ferretsApiSchema>;

export const outNowFerretsApiSchema = z.object({
  ferrets: z.array(z.string()).readonly(),
});
export type OutNowFerretsData = z.infer<typeof outNowFerretsApiSchema>;

export const apiMetaSchema = z.object({
  apiVersion: z.object({
    min: z.string(),
    current: z.string(),
  }),
  lastUpdated: z.iso.datetime(),
});
export type ApiMeta = z.infer<typeof apiMetaSchema>;
