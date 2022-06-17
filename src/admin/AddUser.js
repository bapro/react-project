import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert2";

function AddUser() {
  const navigate = useNavigate();
  const [userInput, setuser] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setuser({ ...userInput, [e.target.name]: e.target.value });
  };

  const saveuser = (e) => {
    e.preventDefault();

    const data = {
      name: userInput.name,
      email: userInput.email,
      phone: userInput.phone,
      role: userInput.role,
    };

    axios.post(`/api/add-user`, data).then((res) => {
      alert(res.data.status);
    });
  };

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h4>
                  Add users
                  <Link to={"/"} className="btn btn-danger btn-sm float-end">
                    {" "}
                    BACK
                  </Link>
                </h4>
              </div>
              <div className="card-body">
                <form onSubmit={saveuser}>
                  <div className="form-group mb-3">
                    <label>user Name</label>
                    <input
                      type="text"
                      name="name"
                      onChange={handleInput}
                      value={userInput.name}
                      className="form-control"
                    />
                    <span className="text-danger">
                      {userInput.error_list.name}
                    </span>
                  </div>
                  <div className="form-group mb-3">
                    <label>user email</label>
                    <input
                      type="text"
                      name="email"
                      onChange={handleInput}
                      value={userInput.email}
                      className="form-control"
                    />
                    <span className="text-danger">
                      {userInput.error_list.email}
                    </span>
                  </div>
                  <div className="form-group mb-3">
                    <label>user Phone</label>
                    <input
                      type="text"
                      name="phone"
                      onChange={handleInput}
                      value={userInput.phone}
                      className="form-control"
                    />
                    <span className="text-danger">
                      {userInput.error_list.phone}
                    </span>
                  </div>
                  <div className="form-group mb-3">
                    <label>user Role</label>
                    <input
                      type="text"
                      name="role"
                      onChange={handleInput}
                      value={userInput.role}
                      className="form-control"
                    />
                    <span className="text-danger">
                      {userInput.error_list.role}
                    </span>
                  </div>

                  <div className="form-group mb-3">
                    <button type="submit" className="btn btn-primary">
                      Save user
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
