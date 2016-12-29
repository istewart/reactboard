export const citySelect = function citySelectKappa(id: number, name: string) {
  return ({
    type: 'CITY_SELECT',
    id,
    name,
  });
};

export const lol = function lolKappa() {
  return ({
    type: 'LOL',
    thing: 'maybe',
  });
};
