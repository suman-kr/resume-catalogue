import { FieldArray } from "formik";
import React from "react";
import { Row, Col, FormControl, Button } from "react-bootstrap";
import { workExperience } from "../../constants/FormConst";
import { AddButton } from "../Common/AddButton";
import { RemoveButton } from "../Common/RemoveButton";
import { InitialProps } from "./interfaces";
import { FormsStyled } from "./styled";

const { FadeIn, FormContainer } = FormsStyled();

export const Experience: React.FC<InitialProps> = (props) => {
  return (
    <FadeIn>
      <FieldArray
        name="experience"
        render={(arrayHelpers) => {
          return (
            <>
              <AddButton
                onClick={(event) => {
                  event.preventDefault();
                  arrayHelpers.push({
                    company: "",
                    title: "",
                    employmentType: "",
                    location: "",
                    description: "",
                    startDate: "",
                    endDate: "",
                  });
                }}
              />
              <FormContainer>
                {props.formik.values.experience.map(
                  (experience: any, index: number) => (
                    <>
                      <Row>
                        {workExperience.map((field, id) => {
                          return (
                            <Col md={6} style={{ margin: "10px 0px 10px 0px" }}>
                              {field.type === "textarea" ? (
                                <FormControl
                                  placeholder={field.placeholder}
                                  {...props.formik.getFieldProps(
                                    `experience[${index}].${field.name}`
                                  )}
                                  as="textarea"
                                />
                              ) : (
                                <FormControl
                                  placeholder={field.placeholder}
                                  {...props.formik.getFieldProps(
                                    `experience[${index}].${field.name}`
                                  )}
                                  type={field.type}
                                />
                              )}
                            </Col>
                          );
                        })}
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
