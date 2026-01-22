export interface Version {
  major: number;
  minor: number;
  patch: number;
}

export const SCHEMA_VERSION: Version = {
  major: 0,
  minor: 0,
  patch: 1,
} as const;
