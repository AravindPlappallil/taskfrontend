import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerEmpl } from "../service/allapi";

function Add() {
  const [userData, setUser] = useState({
    employeeid: "",
    employeename: "",
    employeeplace: "",
    jobdescription: "",
  });

  const userDetails = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setUser({ ...userData, [name]: value });
  };

  const handleSubmit =async (e) => {
    const { employeeid, employeename, employeeplace, jobdescription } =
      userData;
    if (employeeid == "") {
      toast.error("Employee ID required");
    } else if (employeename == "") {
      toast.error("Employee Name required");
    } else if (employeeplace == "") {
      toast.error("Place required");
    } else if (jobdescription == "") {
      toast.error("Job Description required");
    } else {
    //   toast.success("Registration Sucess");

    const headerConfig={
        "Content-Type":"multipart/form-data"
    }
    const data = new FormData()
    data.append("employeeid",employeeid)
    data.append("employeename",employeename)
    data.append("employeeplace",employeeplace)
    data.append("jobdescription",jobdescription)

    const response = await registerEmpl(data, headerConfig)
    console.log(response);
    
    }
  };
  console.log(userData);


  return (
    <div className="container w-100">
      <div className="text-center mt-4">
        <form action="" className="main container w-50">
          <div className="mb-4">
            <h2>Register Employee Details</h2>
          </div>

          <div className="m-1">
            <label className="fs-5 "> Employee ID</label> <br />
            <input
              onChange={userDetails}
              required
              name="employeeid"
              className="form-control "
              type="text"
              placeholder="Employee ID"
            />
          </div>

          <div className="m-1">
            <label className="fs-5 "> Employee Name</label> <br />
            <input
              onChange={userDetails}
              required
              name="employeename"
              className="form-control "
              type="text"
              placeholder="Employee Name"
            />
          </div>

          <div className="m-1">
            <label className="fs-5 "> Place</label> <br />
            <input
              onChange={userDetails}
              required
              name="employeeplace"
              className="form-control "
              type="text"
              placeholder="Place"
            />
          </div>

          <div className="m-1">
            <label className="fs-5 ">Job Description</label> <br />
            <input
              onChange={userDetails}
              required
              name="jobdescription"
              className="form-control "
              type="text"
              placeholder="Job Description"
            />
          </div>

          <div className=" mt-5">
            <button
              onClick={handleSubmit}
              className="form-control w-25 text-center btn-info text-black mx-auto"
            >
              Submit
            </button>
          </div>
        </form>
        <ToastContainer position="top-center" />
      </div>
    </div>
  );
}

export default Add;
