const math = () =>
  (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
export const UUID = () => math() + math() + "03" + math().substring(0, 3);

