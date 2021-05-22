import React, { useState } from "react";
import { Row, Col, FormControl, Button } from "react-bootstrap";
import { projects } from "../../constants/FormConst";

export const Projects: React.FC = (props: any) => {
  return (
    <>
      <Button style={{ width: "3em", height: "3em", borderRadius: "50%" }}>
        Add
      </Button>
      <Row>
        {projects.map((field) => (
          <Col md={6} style={{ margin: "10px 0px 10px 0px" }}>
            {field.type === "textarea" ? (
              <FormControl
                placeholder={field.placeholder}
                name={field.name}
                as="textarea"
                rows={1}
              />
            ) : (
              <FormControl placeholder={field.placeholder} name={field.name} />
            )}
          </Col>
        ))}
      </Row>
    </>
  );
};
