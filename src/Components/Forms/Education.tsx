import React, { useState } from "react";
import { Row, Col, FormControl, Form } from "react-bootstrap";
import { education } from "../../constants/FormConst";
import { InitialProps } from "./interfaces";
import { FormsStyled } from "./styled";

const { FadeIn } = FormsStyled();

export const Education: React.FC<InitialProps> = (props) => {
  return (
    <FadeIn>
      <Row>
        {education.map((field) => (
          <Col md={12} style={{ marginBottom: "1em" }}>
            <Form.Group
              controlId={`${field.name}-id`}
              style={{ marginBottom: "0" }}
            >
              <Form.Label>{field.label}</Form.Label>
              <FormControl
                placeholder={field.placeholder}
                {...props.formik.getFieldProps(field.name)}
              />
            </Form.Group>

            {(props.formik.errors as any)[field.name] &&
            (props.formik.touched as any)[field.name] ? (
              <div className="error">
                {(props.formik.errors as any)[field.name]}
              </div>
            ) : null}
          </Col>
        ))}
      </Row>
    </FadeIn>
  );
};
