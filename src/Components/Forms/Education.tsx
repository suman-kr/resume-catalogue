import React, { useState } from "react";
import { Row, Col, FormControl } from "react-bootstrap";
import { education } from "../../constants/FormConst";
export const Education: React.FC = (props: any) => {
  return (
    <>
      <Row>
        {education.map((field) => (
          <Col md={12} style={{ margin: "10px 0px 10px 0px" }}>
            <FormControl
              placeholder={field.placeholder}
              name={field.name}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};
