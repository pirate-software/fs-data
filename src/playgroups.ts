import { z } from "zod";

export type Playgroup = {
  name: string;
  description: string;
};

export type PlaygroupKey = keyof typeof playgroups;

const playgroups = {
  bepeepo: {
    name: "BePeepo",
    description: "Badger and Peepo's playgroup.",
  },
  fs: {
    name: "F&S",
    description: "Finch and Stinky's playgroup.",
  },
  genpop: {
    name: "General Population",
    description:
      "The biggest playgroup of ferrets in the rescue consisting of 20+ ferrets.",
  },
  k: {
    name: "K2",
    description: "Koko (Nameko) and Kiki (Enoki)'s playgroup.",
  },
  kyosai: {
    name: "Kyo & Sai",
    description: "Kyo and Sai's playgroup.",
  },
  luno: {
    name: "LuNo",
    description: "Lulu and Noodle's playgroup.",
  },
  m: {
    name: "M3",
    description: "Big Mike, Maisy, and Milo's playgroup.",
  },
  ocarinaoftube: {
    name: "Ocarina of Tube",
    description:
      "Group of seven Ferret sages who arrived together in January 2026.",
  },
  oldies: {
    name: "Oldies",
    description:
      "Playgroup consisting of the older ferrets, being 5+ years old.",
  },
  pms: {
    name: "PMS",
    description: "Pepper, Moose, and Salt's playgroup.",
  },
  quarantine: {
    name: "Quarantine",
    description:
      "A group for incoming ferrets that either need observation time for medical needs or have not yet been placed into a permanent group.",
  },
  rb: {
    name: "R&B",
    description: "Rusty and Bruce's playgroup.",
  },
  solo: {
    name: "Solo",
    description: "Ferrets who usually go out solo.",
  },
  valhalla: {
    name: "Valhalla",
    description: "Ferrets who have passed away.",
  },
  vons: {
    name: "VONS",
    description: "Vincent, Onion, Nacho, and Salsa's playgroup.",
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
