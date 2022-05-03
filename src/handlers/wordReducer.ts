import { initialState } from "../context/wordleContext";
import { handleBackspace } from "./handleBackspace";
import { handleEnter } from "./handleEnter";

export const wordReducer = (prevWord: string, key: string) => {
  switch (key) {
    case "Backspace":
      return handleBackspace(prevWord);
    case "Enter":
      return handleEnter(prevWord);
    default:
      const newWord = `${prevWord}${key}`;
      const isWordLengthOk =
        newWord.length < initialState.secretWord.length + 1;
      if (isWordLengthOk) {
        return newWord;
      }
      return prevWord;
  }
};
