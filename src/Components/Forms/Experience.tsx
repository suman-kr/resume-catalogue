import { ErrorMessage, FieldArray } from "formik";
import React, { useState } from "react";
import { Row, Col, FormControl, Button, Card, Form } from "react-bootstrap";
import { workExperience } from "../../constants/FormConst";
import { AddButton } from "../Common/AddButton";
import { RemoveButton } from "../Common/RemoveButton";
import { InitialProps } from "./interfaces";
import { FormsStyled } from "./styled";

const { FadeIn, FormContainer } = FormsStyled();

export const Experience: React.FC<InitialProps> = (props) => {
  const { formik } = props;
  const [checked, setChecked] = useState(false);
  console.log(checked);
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
                            <Col md={field.md} style={{ marginBottom: "1em" }}>
                              <Form.Group
                                controlId={`${field.name}-id`}
                                style={{ marginBottom: "0" }}
                              >
                                
                                {checked && field.label === "End Date" ? <Form.Label>Present Company</Form.Label> :
                                  <Form.Label>{field.label}</Form.Label>
                                }
                                {field.type === "textarea" ? (
                                  <FormControl
                                    placeholder={field.placeholder}
                                    {...formik.getFieldProps(
                                      `experience[${index}].${field.name}`
                                    )}
                                    as="textarea"
                                  />
                                ) : [
                                  field.type === "checkbox" ? (<FormControl placeholder={field.placeholder}
                                    {
                                      ...formik.getFieldProps(`experience[${index}].${field.name}`)
                                    }
                                    type={field.type}
                                    onClick={() => setChecked(!checked)}
                                  />):
                                  [ checked && field.name === "endDate" ? <></>:
                                    (<FormControl
                                    placeholder={field.placeholder}
                                    {...formik.getFieldProps(
                                      `experience[${index}].${field.name}`
                                    )}
                                    type={field.type}
                                  />)
                                  ]
                                ]
                              }
                              </Form.Group>
                              <div className="error">
                                <ErrorMessage
                                  name={`experience[${index}][${field.name}]`}
                                />
                              </div>
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
