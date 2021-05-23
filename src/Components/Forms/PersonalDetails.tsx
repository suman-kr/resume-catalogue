import React from "react";
import { Row, Col, FormControl, Form, Button } from "react-bootstrap";
import { personalDetails } from "../../constants/FormConst";
import { InitialProps } from "./interfaces";
import { FormsStyled } from "./styled";

const { FadeIn } = FormsStyled();

export const PersonalDetails: React.FC<InitialProps> = (props) => {
  return (
    <>
      <FadeIn>
        <Row>
          {personalDetails.map((field) => {
            return (
              <Col md={12} style={{ margin: "10px 0px 10px 0px" }}>
                <FormControl
                  placeholder={field.placeholder}
                  aria-label={field.placeholder}
                  {...props.formik.getFieldProps(field.name)}
                />
              </Col>
            );
          })}
        </Row>
      </FadeIn>
    </>
  );
};
