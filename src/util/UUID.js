export const UUID = () =>
  Math.random()
    .toString(36)
    .substr(-8);
