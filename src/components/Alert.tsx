import { styled } from "@stitches/react";
import * as React from "react";
import { fade } from "../style/animations";

export interface IAlertProps {
  message: string;
  autoDestruct: () => void;
}

const StyledAlert = styled("div", {
  background: "black",
  color: "white",
  fontWeight: "bold",
  textAlign: "center",
  padding: "17px 20px",
  borderRadius: "5px",
  animation: `${fade} 0.25s forwards`,
  animationDelay: "1.75s",
});

function Alert(props: IAlertProps) {
  React.useEffect(() => {
    props.autoDestruct();
  }, []);
  return <StyledAlert>{props.message}</StyledAlert>;
}

export default Alert;
