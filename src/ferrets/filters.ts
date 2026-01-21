import { type Ferret } from "./core";

export type FerretsData = Record<string, Ferret>;

export type AliveFerret<Base extends Ferret = Ferret> = Base & {
  valhalla: null;
};

export type AliveFerretKey<Items extends FerretsData = FerretsData> = {
  [K in keyof Items]: Items[K] extends AliveFerret<Items[K]> ? K : never;
}[Extract<keyof Items, string>];

export type AliveFerrets<Items extends FerretsData = FerretsData> = {
  [K in AliveFerretKey<Items>]: Items[K] extends AliveFerret<Items[K]>
    ? AliveFerret<Items[K]>
    : never;
};

export const isAliveFerretKey = <Items extends FerretsData = FerretsData>(
  key: string,
  data: Items,
): key is AliveFerretKey<Items> => {
  if (!(key in data)) return false;
  const ferret = data[key as keyof Items];
  return ferret !== undefined && ferret.valhalla === null;
};

export const isAliveFerret = <Items extends FerretsData = FerretsData>(
  ferret: Items[keyof Items],
): ferret is AliveFerret<Items[keyof Items]> => ferret.valhalla === null;

export const isAliveFerretEntry = <Items extends FerretsData = FerretsData>(
  entry: [string, Items[keyof Items]],
  data: Items,
): entry is [AliveFerretKey<Items>, AliveFerret<Items[keyof Items]>] =>
  isAliveFerretKey<Items>(entry[0], data) && isAliveFerret<Items>(entry[1]);
