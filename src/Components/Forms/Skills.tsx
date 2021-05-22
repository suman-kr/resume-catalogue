import React, { useState } from "react";
import { Row, Col, FormControl, Button } from "react-bootstrap";
import { skills } from "../../constants/FormConst";

export const Skills: React.FC = (props: any) => {
  return (
    <>
      <Button style={{ width: "3em", height: "3em", borderRadius: "50%" }}>
        Add
      </Button>
      <Row>
        {skills.map((field) => (
          <Col md={6} style={{ margin: "10px 0px 10px 0px" }}>
            <FormControl placeholder={field.placeholder} name={field.name} />
          </Col>
        ))}
      </Row>
    </>
  );
};
