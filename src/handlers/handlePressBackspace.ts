import { TWordWithError } from "../context/wordleContext";

export const handlePressBackspace = (word: string): TWordWithError => {
  return { word: word.slice(0, -1) };
};
