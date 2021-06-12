import { ErrorMessage, FieldArray } from "formik";
import React, { useState } from "react";
import { Row, Col, FormControl, Button, Card } from "react-bootstrap";
import { skills } from "../../constants/FormConst";
import { AddButton } from "../Common/AddButton";
import { RemoveButton } from "../Common/RemoveButton";
import { InitialProps } from "./interfaces";
import { FormsStyled } from "./styled";

const { FadeIn, FormContainer } = FormsStyled();

export const Skills: React.FC<InitialProps> = (props) => {
  const { formik } = props;
  return (
    <FadeIn>
      <FieldArray
        name="skills"
        render={(arrayHelpers) => {
          return (
            <>
              {formik.values.skills!.map((skill: any, index: number) => (
                <>
                  <Card className="form-card">
                    <FormContainer>
                      <AddButton
                        onClick={(event) => {
                          event.preventDefault();
                          arrayHelpers.push({ skillName: "", expertise: "" });
                        }}
                      />
                      {formik.values.skills.length > 1 && (
                        <div style={{ textAlign: "end" }}>
                          <RemoveButton
                            onClick={(event) => {
                              event.preventDefault();
                              arrayHelpers.remove(index);
                            }}
                          />
                        </div>
                      )}
                    </FormContainer>
                    <Row>
                      {skills.map((field) => (
                        <Col md={6} style={{ margin: "10px 0px 10px 0px" }}>
                          <FormControl
                            placeholder={field.placeholder}
                            {...formik.getFieldProps(
                              `skills[${index}].${field.name}`
                            )}
                          />
                          <ErrorMessage
                            name={`skills[${index}][${field.name}]`}
                          />
                        </Col>
                      ))}
                    </Row>
                  </Card>
                </>
              ))}
            </>
          );
        }}
      />
    </FadeIn>
  );
};
