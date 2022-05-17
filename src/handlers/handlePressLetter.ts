import { TWordWithError } from "../context/wordleContext";

export const handlePressLetter = (
  prevWord: string,
  key: string,
  compareWordLength: number
): TWordWithError => {
  const newWord = `${prevWord}${key}`;
  const isWordLengthOk = newWord.length < compareWordLength;
  if (isWordLengthOk) {
    return { word: newWord };
  }
  return { word: prevWord };
};
