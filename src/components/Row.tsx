import { styled } from "@stitches/react";
import React from "react";
import { WordleContext } from "../context/wordleContext";
import Square from "./Square";

interface IRow {
  isActive: boolean;
}

const StyledRow = styled("div", {
  height: "100%",
  display: "flex",
  gap: "10px",
});

function Row(props: IRow) {
  const { word, secretWord } = React.useContext(WordleContext);

  const getLetter = (index: number) => {
    if (props.isActive) {
      return word[index];
    }

    return "";
  };

  return (
    <StyledRow>
      {Array.from(Array(secretWord.length).keys()).map((letterPosition) => (
        <Square letter={getLetter(letterPosition)} />
      ))}
    </StyledRow>
  );
}

export default Row;
