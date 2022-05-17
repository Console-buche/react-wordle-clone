import { styled } from "@stitches/react";
import * as React from "react";
import Alert from "./Alert";
import { v4 } from "uuid";
import { WordleContext } from "../context/wordleContext";

export interface IAlertBoxProps {}

const StyledAlertBox = styled("div", {
  position: "absolute",
  width: "fit-content",
  height: "600px",
  gap: "20px",
  display: "flex",
  flexDirection: "column-reverse",
  justifyContent: "flex-end",
});

type TAlert = {
  id: string;
  message: string;
};

function AlertBox(props: IAlertBoxProps) {
  const [alerts, setAlerts] = React.useState<TAlert[]>([]);

  const {
    wordWithError: { errorMessage },
  } = React.useContext(WordleContext);

  React.useEffect(() => {
    const handlePressEnter = (event: KeyboardEvent) => {
      if (event.key === "Enter" && errorMessage)
        setAlerts((prevAlerts) => [
          ...prevAlerts,
          { message: errorMessage, id: v4() },
        ]);
    };

    document.addEventListener("keydown", handlePressEnter);

    return () => document.removeEventListener("keydown", handlePressEnter);
  }, [errorMessage]);

  return (
    <StyledAlertBox>
      {alerts.map((alert) => (
        <Alert
          autoDestruct={() =>
            setTimeout(() => {
              setAlerts((prevAlerts) =>
                prevAlerts.filter((thisAlert) => thisAlert.id !== alert.id)
              );
            }, 2000)
          }
          key={alert.id}
          message={alert.message}
        />
      ))}
    </StyledAlertBox>
  );
}

export default AlertBox;
