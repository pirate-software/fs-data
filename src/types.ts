import { z } from "zod";

type OneToNine = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type ZeroToNine = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type DateStringYear =
  | `19${ZeroToNine}${ZeroToNine}`
  | `20${ZeroToNine}${ZeroToNine}`;
type DateStringMonth = `0${OneToNine}` | `1${0 | 1 | 2}`;
type DateStringYearMonth = `${DateStringYear}-${DateStringMonth}`;
type DateStringDay = `${0}${OneToNine}` | `${1 | 2}${ZeroToNine}` | `3${0 | 1}`;
type DateString = `${DateStringYearMonth}-${DateStringDay}`;
export type PartialDateString =
  | DateStringYear
  | DateStringYearMonth
  | DateString;
export type BirthdayString = `${DateStringMonth}-${DateStringDay}`;

export const isPartialDateString = (
  value: string,
): value is PartialDateString => {
  const year = "(19|20)\\d{2}";
  const month = "(0[1-9]|1[0-2])";
  const day = "(0[1-9]|[12][0-9]|3[01])";
  return new RegExp(
    `^(${year}|${year}-${month}|${year}-${month}-${day})$`,
  ).test(value);
};

export const isBirthdayString = (value: string): value is BirthdayString => {
  const month = "(0[1-9]|1[0-2])";
  const day = "(0[1-9]|[12][0-9]|3[01])";
  return new RegExp(`^(${month}|${month}-${day})$`).test(value);
};

export const partialDateStringSchema = z.custom<PartialDateString>(
  (value) => typeof value === "string" && isPartialDateString(value),
  "must be a valid partial date string (YYYY-MM-DD, YYYY-MM, YYYY)",
);

export const birthdayStringSchema = z.custom<BirthdayString>(
  (value) => typeof value === "string" && isBirthdayString(value),
  "must be a valid birthday string (MM-DD)",
);

export const pathSchema = z.string().regex(/^(\.{0,2}\/[a-z_\-\s0-9\.]+)+\/?$/);

export const wikipageSchema = z
  .string()
  .regex(/^[a-zA-Z0-9\-._~:/?#\[\]@!$&'()*+,;=]+$/);
