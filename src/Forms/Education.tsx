import React, { useState } from "react";
import { Row, Col, FormControl } from "react-bootstrap";
export const Education: React.FC = (props: any) => {
  const [scoreType, setScoreType] = useState("");
  return (
    <>
      <Row>
        <Col md={12} style={{ margin: "10px 0px 10px 0px" }}>
          <FormControl placeholder="Institute Name" aria-label="Name" />
        </Col>
        <Col md={6} style={{ margin: "10px 0px 10px 0px" }}>
          <FormControl placeholder="Degree" aria-label="Name" />
        </Col>
        <Col md={6} style={{ margin: "10px 0px 10px 0px" }}>
          <FormControl placeholder="Major" aria-label="Name" />
        </Col>
        <Col md={6} style={{ margin: "10px 0px 10px 0px" }}>
          <FormControl placeholder="Month" aria-label="Name" />
        </Col>
        <Col md={6} style={{ margin: "10px 0px 10px 0px" }}>
          <FormControl placeholder="Year" aria-label="Name" />
        </Col>
        <Col md={4} style={{ margin: "10px 0px 10px 0px" }}>
          <FormControl
            as="select"
            onChange={(event) => setScoreType(event.target.value)}
          >
            <option value="percentage">Percentage</option>
            <option value="gpa">GPA/CGPA</option>
          </FormControl>
        </Col>
        {scoreType === "percentage" ? (
          <Col md={4} style={{ margin: "10px 0px 10px 0px" }}>
            <FormControl placeholder="Percentage" aria-label="Phone Number" />
          </Col>
        ) : (
          <Col md={4} style={{ margin: "10px 0px 10px 0px" }}>
            <FormControl placeholder="GPA/CGPA" aria-label="Phone Number" />
          </Col>
        )}
      </Row>
    </>
  );
};
