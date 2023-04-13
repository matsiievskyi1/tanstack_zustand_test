export const basicRequest = async <T>(url: string, config: RequestInit = {}): Promise<T> => {
  try {
    return (await (await fetch(url, config)).json()) as T;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Oops ");
    }
  }
};
