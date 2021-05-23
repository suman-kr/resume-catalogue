import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { AddButtonStyled } from "./styled";

const { Button } = AddButtonStyled();

export const AddButton: React.FC = (props) => {
  return (
    <Button>
      <FontAwesomeIcon icon={faPlus} color="white" />
    </Button>
  );
};
