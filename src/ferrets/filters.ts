import ferrets, { type Ferret } from "./core";

type FerretsData = Record<string, Ferret>;

// Alive

export type AliveFerret<Base extends Ferret = Ferret> = Base & {
  valhalla: null;
};

export type AliveFerretKey<Items extends FerretsData = typeof ferrets> = {
  [K in keyof Items]: Items[K] extends AliveFerret<Items[K]> ? K : never;
}[Extract<keyof Items, string>];

export type AliveFerrets<Items extends FerretsData = typeof ferrets> = {
  [K in AliveFerretKey<Items>]: Items[K] extends AliveFerret<Items[K]>
    ? AliveFerret<Items[K]>
    : never;
};

export const isAliveFerretKey = <Items extends FerretsData = typeof ferrets>(
  key: string,
): key is AliveFerretKey<Items> =>
  key in ferrets && ferrets[key as keyof typeof ferrets].valhalla === null;

export const isAliveFerret = <Items extends FerretsData = typeof ferrets>(
  ferret: Items[keyof Items],
): ferret is AliveFerret<Items[keyof Items]> => ferret.valhalla === null;

export const isAliveFerretEntry = <Items extends FerretsData = typeof ferrets>(
  entry: [string, Items[keyof Items]],
): entry is [AliveFerretKey<Items>, AliveFerret<Items[keyof Items]>] =>
  isAliveFerretKey<Items>(entry[0]) && isAliveFerret<Items>(entry[1]);
