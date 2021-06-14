import { ErrorMessage, FieldArray } from "formik";
import React from "react";
import { Row, Col, FormControl, Button, Card } from "react-bootstrap";
import { workExperience } from "../../constants/FormConst";
import { AddButton } from "../Common/AddButton";
import { RemoveButton } from "../Common/RemoveButton";
import { InitialProps } from "./interfaces";
import { FormsStyled } from "./styled";

const { FadeIn, FormContainer } = FormsStyled();

export const Experience: React.FC<InitialProps> = (props) => {
  const { formik } = props;
  return (
    <FadeIn>
      <FieldArray
        name="experience"
        render={(arrayHelpers) => {
          return (
            <>
              {formik.values.experience.map(
                (experience: any, index: number) => (
                  <>
                    <Card className="form-card">
                      <FormContainer>
                        <AddButton
                          onClick={(event) => {
                            event.preventDefault();
                            arrayHelpers.insert(index, {
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
                        {formik.values.experience.length > 1 && (
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
                        {workExperience.map((field, id) => {
                          return (
                            <Col md={6} style={{ margin: "10px 0px 10px 0px" }}>
                              {field.type === "textarea" ? (
                                <FormControl
                                  placeholder={field.placeholder}
                                  {...formik.getFieldProps(
                                    `experience[${index}].${field.name}`
                                  )}
                                  as="textarea"
                                />
                              ) : (
                                <FormControl
                                  placeholder={field.placeholder}
                                  {...formik.getFieldProps(
                                    `experience[${index}].${field.name}`
                                  )}
                                  type={field.type}
                                />
                              )}
                              <ErrorMessage
                                name={`experience[${index}][${field.name}]`}
                              />
                            </Col>
                          );
                        })}
                      </Row>
                    </Card>
                  </>
                )
              )}
            </>
          );
        }}
      />
    </FadeIn>
  );
};
