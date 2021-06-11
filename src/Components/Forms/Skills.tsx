import { FieldArray } from "formik";
import React, { useState } from "react";
import { Row, Col, FormControl, Button } from "react-bootstrap";
import { skills } from "../../constants/FormConst";
import { AddButton } from "../Common/AddButton";
import { RemoveButton } from "../Common/RemoveButton";
import { InitialProps } from "./interfaces";
import { FormsStyled } from "./styled";

const { FadeIn, FormContainer } = FormsStyled();

export const Skills: React.FC<InitialProps> = (props) => {
  return (
    <FadeIn>
      <FieldArray
        name="skills"
        render={(arrayHelpers) => {
          return (
            <>
              <AddButton
                onClick={(event) => {
                  event.preventDefault();
                  arrayHelpers.push({ skillName: "", expertise: "" });
                }}
              />
              <FormContainer>
                {props.formik.values.skills.map((skill: any, index: number) => (
                  <>
                    <Row>
                      {skills.map((field) => (
                        <Col
                          md={index > 0 ? 5 : 6}
                          style={{ margin: "10px 0px 10px 0px" }}
                        >
                          <FormControl
                            placeholder={field.placeholder}
                            {...props.formik.getFieldProps(
                              `skills[${index}].${field.name}`
                            )}
                          />
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
                ))}
              </FormContainer>
            </>
          );
        }}
      />
    </FadeIn>
  );
};
