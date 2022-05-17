import { TWordWithError } from "../context/wordleContext";

export const handlePressEnter = (
  word: string,
  compareWord: string
): TWordWithError => {
  if (word.length < compareWord.length) {
    return { word, errorMessage: "mot trop court" };
  }
  if (word !== compareWord) {
    return { word, errorMessage: "nope, trompé" };
  }
  return { word };
};
