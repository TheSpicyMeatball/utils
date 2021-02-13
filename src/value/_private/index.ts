// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const any = (check: (value: unknown) => boolean, ...args: any[]) : boolean => {
  for (const value of args) {
    if (check(value)) return true;
  }

  return false;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const all = (check: (value: unknown) => boolean, ...args: any[]) : boolean => {
  for (const value of args) {
    if (!check(value)) return false;
  }

  return true;
};