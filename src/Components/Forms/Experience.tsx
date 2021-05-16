import React from "react";
import { Row, Col, FormControl } from "react-bootstrap";
export const Experience: React.FC = (props: any) => {
  return (
    <>
      <Row>
        <Col md={6} style={{ margin: "10px 0px 10px 0px" }}>
          <FormControl placeholder="Company Name" aria-label="Name" />
        </Col>
        <Col md={6} style={{ margin: "10px 0px 10px 0px" }}>
          <FormControl placeholder="Job Title" />
        </Col>
        <Col md={6} style={{ margin: "10px 0px 10px 0px" }}>
          <FormControl placeholder="Month of Joining" aria-label="Email" />
        </Col>
        <Col md={6} style={{ margin: "10px 0px 10px 0px" }}>
          <FormControl placeholder="Year of Joining" aria-label="Email" />
        </Col>
        <Col md={6} style={{ margin: "10px 0px 10px 0px" }}>
          <FormControl placeholder="Month of Leaving" aria-label="Email" />
        </Col>
        <Col md={6} style={{ margin: "10px 0px 10px 0px" }}>
          <FormControl placeholder="Year of Leaving" aria-label="Email" />
        </Col>
        <Col md={6} style={{ margin: "10px 0px 10px 0px" }}>
          <FormControl placeholder="Location" />
        </Col>
        <Col md={6} style={{ margin: "10px 0px 10px 0px" }}>
          <FormControl placeholder="Work Summary" as="textarea" />
        </Col>
      </Row>
    </>
  );
};
