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
              <Col md={12} style={{ marginBottom: "1em" }}>
                <Form.Group
                  controlId={`${field.name}-id`}
                  style={{ marginBottom: "0" }}
                >
                  <Form.Label>{field.label}</Form.Label>
                  <FormControl
                    placeholder={field.placeholder}
                    {...props.formik.getFieldProps(field.name)}
                    type={field.type}
                  />
                </Form.Group>

                {(props.formik.errors as any)[field.name] &&
                (props.formik.touched as any)[field.name] ? (
                  <div className="error">
                    {(props.formik.errors as any)[field.name]}
                  </div>
                ) : null}
              </Col>
            );
          })}
        </Row>
      </FadeIn>
    </>
  );
};
