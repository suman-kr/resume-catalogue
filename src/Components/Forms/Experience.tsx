import React from "react";
import { Row, Col, FormControl, Button } from "react-bootstrap";
import { workExperience } from "../../constants/FormConst";
export const Experience: React.FC = (props: any) => {
  return (
    <>
      <Button style={{ width: "3em", height: "3em", borderRadius: "50%" }}>
        Add
      </Button>
      <Row>
        {workExperience.map((field, id) => {
          return (
            <Col md={6} style={{ margin: "10px 0px 10px 0px" }}>
              {field.type === "textarea" ? (
                <FormControl
                  placeholder={field.placeholder}
                  aria-label={field.name}
                  name={field.name}
                  as="textarea"
                />
              ) : (
                <FormControl
                  placeholder={field.placeholder}
                  aria-label={field.name}
                  name={field.name}
                  type={field.type}
                />
              )}
            </Col>
          );
        })}
      </Row>
    </>
  );
};
