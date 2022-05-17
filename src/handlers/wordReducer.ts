import { initialState, TWordWithError } from "../context/wordleContext";
import { handlePressBackspace } from "./handlePressBackspace";
import { handlePressEnter } from "./handlePressEnter";
import { handlePressLetter } from "./handlePressLetter";

export const wordReducer = (
  state: TWordWithError,
  key: string
): TWordWithError => {
  if (!/^[a-z]+$/i.test(key)) return { word: state.word };

  switch (key) {
    case "Backspace":
      return handlePressBackspace(state.word);
    case "Enter":
      return handlePressEnter(state.word, initialState.secretWord);
    default:
      return handlePressLetter(
        state.word,
        key,
        initialState.secretWord.length + 1
      );
  }
};
