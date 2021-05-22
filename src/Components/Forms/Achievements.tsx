import React, { useState } from "react";
import { Row, Col, FormControl } from "react-bootstrap";
import { careerAchievements } from "../../constants/FormConst";
export const CareerAchievements: React.FC = (props: any) => {
  return (
    <>
      <Row>
        {careerAchievements.map((field) => (
          <Col md={12} style={{ margin: "10px 0px 10px 0px" }}>
            <FormControl
              placeholder={field.placeholder}
              name={field.name}
              as="textarea"
              rows={1}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};
