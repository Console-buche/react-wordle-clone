import { styled } from "@stitches/react";
import React from "react";
import AlertBox from "./components/AlertBox";
import Grid from "./components/Grid";
import { initialState, WordleContext } from "./context/wordleContext";
import { wordReducer } from "./handlers/wordReducer";

const Container = styled("div", {
  height: "100vh",
  width: "100vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

function App() {
  const [wordWitherror, setWordWithError] = React.useReducer(
    wordReducer,
    initialState.wordWithError
  );

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => setWordWithError(event.key);

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <WordleContext.Provider
      value={{
        ...initialState,
        wordWithError: {
          word: wordWitherror.word,
          errorMessage: wordWitherror.errorMessage,
        },
      }}
    >
      <Container>
        <Grid />
        <AlertBox />
      </Container>
    </WordleContext.Provider>
  );
}

export default App;
