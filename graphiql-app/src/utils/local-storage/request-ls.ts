import { RequestItem } from '../../types/interface';

export function getRequestFromLocalStorage(key: string): RequestItem[] | null {
  const storedData = localStorage.getItem(key);
  return storedData ? JSON.parse(storedData) : null;
}

export const saveRequestToLocalStorage = (key: string, data: RequestItem[]) => {
  try {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(key, jsonData);
  } catch (error) {
    throw new Error(`error ${error}`);
  }
};
