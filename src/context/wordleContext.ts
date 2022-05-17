import * as React from "react";

export type TWordWithError = {
  word: string;
  errorMessage?: string;
};

interface IInitialState {
  wordWithError: TWordWithError;
  secretWord: string;
}

export const initialState: IInitialState = {
  wordWithError: {
    word: "",
    errorMessage: "",
  },
  secretWord: "hello",
};

export const WordleContext = React.createContext(initialState);
