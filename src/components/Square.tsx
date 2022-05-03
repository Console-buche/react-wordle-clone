import { styled } from "@stitches/react";
import * as React from "react";
import { bounce } from "../style/animations";
import Letter from "./Letter";

interface ILetter {
  letter: string;
}

const StyledSquare = styled("div", {
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  outline: "2px solid #d3d6da",
  transition: "0.25s outline",
  variants: {
    isActive: {
      true: {
        outline: "2px solid #878a8c",
        animation: `${bounce} 200ms ease`,
      },
    },
  },
});

function Square(props: ILetter) {
  return (
    <StyledSquare isActive={!!props.letter}>
      <Letter letter={props.letter} />
    </StyledSquare>
  );
}

export default Square;

//
