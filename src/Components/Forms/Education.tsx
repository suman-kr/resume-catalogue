import React, { useState } from "react";
import { Row, Col, FormControl } from "react-bootstrap";
import { education } from "../../constants/FormConst";
import { InitialProps } from "./interfaces";
import { FormsStyled } from "./styled";

const { FadeIn } = FormsStyled();

export const Education: React.FC<InitialProps> = (props) => {
  return (
    <FadeIn>
      <Row>
        {education.map((field) => (
          <Col md={12} style={{ margin: "10px 0px 10px 0px" }}>
            <FormControl
              placeholder={field.placeholder}
              {...props.formik.getFieldProps(field.name)}
            />
          </Col>
        ))}
      </Row>
    </FadeIn>
  );
};
