import * as React from "react";

export const initialState = {
  word: "",
  secretWord: "hello",
};

export const WordleContext = React.createContext(initialState);
