import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { RemoveButtonStyled } from "./styled";

const { Button } = RemoveButtonStyled();

export const RemoveButton: React.FC<RemoveButtonProps> = (props) => {
  return (
    <Button onClick={props.onClick}>
      <FontAwesomeIcon icon={faMinus} color="white" />
    </Button>
  );
};

interface RemoveButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
