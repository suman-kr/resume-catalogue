import React, { useState } from "react";
import { Row, Col, FormControl } from "react-bootstrap";
import { careerAchievements } from "../../constants/FormConst";
import { InitialProps } from "./interfaces";
import { FormsStyled } from "./styled";

const { FadeIn } = FormsStyled();
export const CareerAchievements: React.FC<InitialProps> = (props) => {
  return (
    <FadeIn>
      <Row>
        {careerAchievements.map((field) => (
          <Col md={12} style={{ margin: "10px 0px 10px 0px" }}>
            <FormControl
              placeholder={field.placeholder}
              {...props.formik.getFieldProps(field.name)}
              as="textarea"
            />
          </Col>
        ))}
      </Row>
    </FadeIn>
  );
};
