import { FieldArray } from "formik";
import React, { useState } from "react";
import { Row, Col, FormControl, Button } from "react-bootstrap";
import { projects } from "../../constants/FormConst";
import { AddButton } from "../Common/AddButton";
import { RemoveButton } from "../Common/RemoveButton";
import { InitialProps } from "./interfaces";
import { FormsStyled } from "./styled";

const { FadeIn, FormContainer } = FormsStyled();
export const Projects: React.FC<InitialProps> = (props) => {
  return (
    <FadeIn>
      <FieldArray
        name="projects"
        render={(arrayHelpers) => {
          return (
            <>
              <AddButton
                onClick={(event) => {
                  event.preventDefault();
                  arrayHelpers.push({
                    projectName: "",
                    projectDescription: "",
                  });
                }}
              />
              <FormContainer>
                {props.formik.values.projects.map(
                  (project: any, index: number) => (
                    <>
                      <Row>
                        {projects.map((field) => (
                          <Col
                            md={index > 0 ? 5 : 6}
                            style={{ margin: "10px 0px 10px 0px" }}
                          >
                            {field.type === "textarea" ? (
                              <FormControl
                                placeholder={field.placeholder}
                                as="textarea"
                                rows={1}
                                {...props.formik.getFieldProps(
                                  `projects[${index}].${field.name}`
                                )}
                              />
                            ) : (
                              <FormControl
                                placeholder={field.placeholder}
                                {...props.formik.getFieldProps(
                                  `projects[${index}].${field.name}`
                                )}
                              />
                            )}
                          </Col>
                        ))}
                        {index > 0 && (
                          <div style={{ textAlign: "end" }}>
                            <RemoveButton
                              onClick={(event) => {
                                event.preventDefault();
                                arrayHelpers.remove(index);
                              }}
                            />
                          </div>
                        )}
                      </Row>
                    </>
                  )
                )}
              </FormContainer>
            </>
          );
        }}
      />
    </FadeIn>
  );
};
