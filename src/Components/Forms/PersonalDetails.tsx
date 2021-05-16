import React from "react";
import { Row, Col, FormControl } from "react-bootstrap";
import { personalDetails } from "../../constants/FormConst";

export const PersonalDetails: React.FC = (props: any) => {
  return (
    <Row>
      {personalDetails.map((field) => {
        return (
          <Col md={12} style={{ margin: "10px 0px 10px 0px" }}>
            <FormControl
              placeholder={field.placeholder}
              aria-label={field.placeholder}
            />
          </Col>
        );
      })}
    </Row>
  );
};
