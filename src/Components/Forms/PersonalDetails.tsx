import React from "react";
import { Row, Col, FormControl } from "react-bootstrap";
export const PersonalDetails: React.FC = (props: any) => {
  return (
    <>
      <Row>
        <Col md={12} style={{ margin: "10px 0px 10px 0px" }}>
          <FormControl placeholder="Full Name" aria-label="Name" />
        </Col>
        <Col md={12} style={{ margin: "10px 0px 10px 0px" }}>
          <FormControl placeholder="Email" aria-label="Email" />
        </Col>
        <Col md={12} style={{ margin: "10px 0px 10px 0px" }}>
          <FormControl placeholder="Phone Number" aria-label="Phone Number" />
        </Col>
      </Row>
    </>
  );
};
