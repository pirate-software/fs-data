import { z } from "zod";

export type Playgroup = {
  name: string;
};

export type PlaygroupKey = keyof typeof playgroups;

const playgroups = {
  genpop: {
    name: "General Population",
  },
} as const satisfies Record<string, Playgroup>;

const playgroupKeys = Object.keys(playgroups) as PlaygroupKey[];

export const isPlaygroupKey = (str: string): str is PlaygroupKey =>
  playgroupKeys.includes(str as PlaygroupKey);

export const playgroupKeySchema = z.custom<PlaygroupKey>(
  (value) => typeof value === "string" && isPlaygroupKey(value),
  `must be a valid playgroup key (${playgroupKeys.join(", ")})`,
);

export default playgroups;
