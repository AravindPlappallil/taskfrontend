import React from "react";

function Edit() {
  return (
    <div className="container w-100">
      <div className="text-center mt-4">
        <form action="" className="main container w-50">
          <div className="mb-4">
            <h2>Edit Employee Details</h2>
          </div>

          <div className="m-1">
            <label className="fs-5 "> Employee ID</label> <br />
            <input
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
              required
              name="place"
              className="form-control "
              type="text"
              placeholder="Place"
            />
          </div>

          <div className="m-1">
            <label className="fs-5 ">Job Description</label> <br />
            <input
              required
              name="jobdescription"
              className="form-control "
              type="text"
              placeholder="Job Description"
            />
          </div>

          <div className=" mt-5">
            <button className="form-control w-25 text-center btn-info text-black  mx-auto">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit;
