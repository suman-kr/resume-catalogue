import React from "react";
import { Row, Col, FormControl } from "react-bootstrap";
import { personalDetails } from "../../constants/FormConst";
import { FormsStyled } from "./styled";

const { FadeIn } = FormsStyled();

export const PersonalDetails: React.FC = (props: any) => {
  return (
    <>
      <FadeIn>
        <Row>
          {personalDetails.map((field) => {
            return (
              <Col md={12} style={{ margin: "10px 0px 10px 0px" }}>
                <FormControl
                  placeholder={field.placeholder}
                  aria-label={field.placeholder}
                  name={field.name}
                />
              </Col>
            );
          })}
        </Row>
      </FadeIn>
    </>
  );
};
