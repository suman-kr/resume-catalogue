import { ErrorMessage, FieldArray } from "formik";
import React, { useState } from "react";
import { Row, Col, FormControl, Button, Card } from "react-bootstrap";
import { projects } from "../../constants/FormConst";
import { AddButton } from "../Common/AddButton";
import { RemoveButton } from "../Common/RemoveButton";
import { InitialProps } from "./interfaces";
import { FormsStyled } from "./styled";

const { FadeIn, FormContainer } = FormsStyled();
export const Projects: React.FC<InitialProps> = (props) => {
  const { formik } = props;
  return (
    <FadeIn>
      <FieldArray
        name="projects"
        render={(arrayHelpers) => {
          return (
            <>
              {formik.values.projects.map((project: any, index: number) => (
                <>
                  <Card className="form-card">
                    <FormContainer>
                      <AddButton
                        onClick={(event) => {
                          event.preventDefault();
                          arrayHelpers.insert(index, {
                            projectName: "",
                            projectDescription: "",
                          });
                        }}
                      />

                      {formik.values.projects.length > 1 && (
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
                      {projects.map((field) => (
                        <Col md={6} style={{ margin: "10px 0px 10px 0px" }}>
                          {field.type === "textarea" ? (
                            <FormControl
                              placeholder={field.placeholder}
                              as="textarea"
                              rows={1}
                              {...formik.getFieldProps(
                                `projects[${index}].${field.name}`
                              )}
                            />
                          ) : (
                            <FormControl
                              placeholder={field.placeholder}
                              {...formik.getFieldProps(
                                `projects[${index}].${field.name}`
                              )}
                            />
                          )}
                          <ErrorMessage
                            name={`projects[${index}][${field.name}]`}
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
