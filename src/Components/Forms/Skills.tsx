import React, { useState } from "react";
import { Row, Col, FormControl, Button } from "react-bootstrap";
import { skills } from "../../constants/FormConst";
import { AddButton } from "../Common/AddButton";
import { FormsStyled } from "./styled";

const { FadeIn } = FormsStyled();

export const Skills: React.FC = (props: any) => {
  return (
    <FadeIn>
      <AddButton />
      <Row>
        {skills.map((field) => (
          <Col md={6} style={{ margin: "10px 0px 10px 0px" }}>
            <FormControl placeholder={field.placeholder} name={field.name} />
          </Col>
        ))}
      </Row>
    </FadeIn>
  );
};
