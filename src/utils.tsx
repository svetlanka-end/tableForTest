export const isObject = (value: any) => {
  return value !== null && typeof value === "object";
};

export const compare = (name: string, a: any, b: any) => {
  if (a[name] > b[name]) {
    return 1;
  }
  if (a[name] < b[name]) {
    return -1;
  }
  return 0;
};
