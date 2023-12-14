import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Dropdown from 'react-bootstrap/Dropdown';


function Home() {
  return (
    <div>
      {/* add employees */}
      <div className="pb-3">
        <div className="text-center mt-5 ">
          <Link to={"add"}>
            {" "}
            <Button variant="info ">
              Add Employee <i class="fa-solid fa-user-plus ms-2"></i>
            </Button>{" "}
          </Link>
        </div>
      </div>

      {/* employee table */}
      <div className="container mt-3">
      <h3 className='ms-3 mb-3'>List of Employees</h3>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>No</th>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Place</th>
              <th>Job Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>ID-101</td>
              <td>Aravind</td>
              <td>Ernakulam</td>
              <td>Junior Developer</td>
              <td className="text-center">
              <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <i class="fa-solid fa-ellipsis-vertical fa-fade"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='bg-light'>
                    <Dropdown.Item > 
                        <Link style={{textDecoration:'none'}} to={'view'} ><i class="fa-solid fa-eye fa-beat-fade"></i> View</Link>
                        </Dropdown.Item>
                      <Dropdown.Item > 
                     <Link style={{textDecoration:'none'}} to={'edit'}> <i class="fa-solid fa-user-pen"></i> Edit </Link>
                      </Dropdown.Item>
                      <Dropdown.Item >  <i class="fa-solid fa-trash-arrow-up fa-bounce"></i> Delete</Dropdown.Item>
                      

                    </Dropdown.Menu>
                  </Dropdown>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Home;
