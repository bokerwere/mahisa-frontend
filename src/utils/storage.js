import { APP_NAME } from "../data/strings";

export const setStorage = async (data, NAME = APP_NAME) =>
  await localStorage.setItem(NAME, JSON.stringify(data));

export const getStorage = async (NAME = APP_NAME) => {
  const user = await JSON.stringify(localStorage.getItem(NAME));
  return user ? user : {};
};

export const clearStorage = async () => {
  const user = await localStorage.clear();

  return user ? user : {};
};
