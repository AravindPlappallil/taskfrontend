import React from "react";
import { ListGroup } from "react-bootstrap";

function View() {
  return (
    <div>
      <div className="text-center mt-2">
        <h2>Employee Details</h2>
      </div>
      {
        <div className="container w-50 gap-5 ">

          <div className=" ">
            <ListGroup className="mt-5 w-100 h-50 fs-2 ">
              <ListGroup.Item>Employee ID:-</ListGroup.Item>
              <ListGroup.Item>Employee Name:-</ListGroup.Item>
              <ListGroup.Item>Place:</ListGroup.Item>
              <ListGroup.Item>Job Description:</ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      }
    </div>
  );
}

export default View;
