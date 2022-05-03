import { initialState } from "../context/wordleContext";

export const handleEnter = (prevWord: string) => {
  if (initialState.secretWord.length > prevWord.length) {
    console.log("mot trop court");
    return prevWord;
  }
  if (initialState.secretWord !== prevWord) {
    console.log("oups, trompé");
    return prevWord;
  }
  console.log(`Bravo, t'as trouvé !`);
  return prevWord;
};
