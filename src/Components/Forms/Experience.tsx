import React from "react";
import { Row, Col, FormControl, Button } from "react-bootstrap";
import { workExperience } from "../../constants/FormConst";
import { AddButton } from "../Common/AddButton";
import { InitialProps } from "./interfaces";
import { FormsStyled } from "./styled";

const { FadeIn } = FormsStyled();

export const Experience: React.FC<InitialProps> = (props) => {
  return (
    <FadeIn>
      <AddButton />
      <Row>
        {workExperience.map((field, id) => {
          return (
            <Col md={6} style={{ margin: "10px 0px 10px 0px" }}>
              {field.type === "textarea" ? (
                <FormControl
                  placeholder={field.placeholder}
                  aria-label={field.placeholder}
                  as="textarea"
                />
              ) : (
                <FormControl
                  placeholder={field.placeholder}
                  aria-label={field.name}
                  type={field.type}
                />
              )}
            </Col>
          );
        })}
      </Row>
    </FadeIn>
  );
};
