import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import "bootstrap/dist/css/bootstrap.min.css";

const AddStudent = () => {
  const [roll, setRoll] = useState("");
  const [username, setUsername] = useState("");
  const [year, setYear] = useState("");
  const [degree, setDegree] = useState("");
  const [department, setDepartment] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    roll: "",
    username: "",
    year: "",
    degree:"",
    department:"",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};

    if (!formData.roll) {
      errors.roll = "Roll No is required";
    } else errors.roll = "";

    if (!formData.username) {
      errors.username = "Username is required";
    } else errors.username = "";

    if (!formData.year) {
      errors.year = "year is required";
    } else errors.year = "";

    if (!formData.degree) {
      errors.degree = "Degree is required";
    } else errors.degree = "";

    if (!formData.department) {
      errors.department = "Department is required";
    } else errors.department = "";

    if (!formData.password) {
      errors.password = "Password is required";
    } else errors.password = "";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const timer = setTimeout(() => {
        setErrors({});
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [errors]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:8001/auth/verify")
      .then((res) => {
        if (res.data.login) {
          if (roll && username && year && degree && department && password) {
            axios
              .post("http://localhost:8001/student/register", {
                roll,
                username,
                year,
                degree,
                department,
                password,
              })
              .then((res) => {
                if (res.data.registered) {
                  navigate("/dashboard");
                }
              })
              .catch((err) => console.log(err));
          }
        } else {
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleCombinedSubmit = (event) => {
    event.preventDefault();
    handleSubmit(event);
    handleFormSubmit(event);
  };

  return (
    <div className="student-form-container">
      <form onSubmit={handleCombinedSubmit} className="student-form">
        <h2>Add Student</h2>
        <div className="form-group">
          <label htmlFor="roll">Roll No:</label>
          <input
            type="text"
            placeholder="Enter Roll No"
            id="roll"
            name="roll"
            value={formData.roll}
            onChange={(e) => {
              setRoll(e.target.value);
              handleChange(e);
            }}
          />
          {errors.roll && <span style={{ color: "red" }}>{errors.roll}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="username">User Name:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter User Name"
            value={formData.username}
            onChange={(e) => {
              setUsername(e.target.value);
              handleChange(e);
            }}
          />
          {errors.username && (
            <span style={{ color: "red" }}>{errors.username}</span>
          )}
        </div>

        <div className="form-group">
  <label htmlFor="department">Department:</label>
  <select
    id="department"
    name="department"
    className="select-option"
    value={formData.department}
    onChange={(e) => {
      setDepartment(e.target.value);
      handleChange(e);
    }}
  >
    <option value="">Select Department</option>
    <option value="automobile">Auto Mobile</option>
    <option value="civil">Civil</option>
    <option value="cse">CSE</option>
    <option value="ece">ECE</option>
    <option value="eee">EEE</option>
    <option value="mech">Mech</option>
    <option value="it">IT</option>
    <option value="mca">MCA</option>
    <option value="mba">MBA</option>
  </select>
  {errors.department && (
    <span style={{ color: "red" }}>{errors.department}</span>
  )}
</div>

       <div className="form-group">
  <label htmlFor="year">Year:</label>
  <select
    id="year"
    name="year"
    className="select-option"
    value={formData.year}
    onChange={(e) => {
      setYear(e.target.value);
      handleChange(e);
    }}
  >
    <option value="">Select Year</option>
    <option value="1st Year">1st Year</option>
    <option value="2nd Year">2nd Year</option>
    <option value="3rd Year">3rd Year</option>
    <option value="Final Year">Final Year</option>
  </select>
  {errors.year && <span style={{ color: "red" }}>{errors.year}</span>}
</div>


        <div className="form-group">
  <label htmlFor="degree">Degree:</label>
  <select
    id="degree"
    name="degree"
    className="select-option"
    value={formData.degree}
    onChange={(e) => {
      setDegree(e.target.value);
      handleChange(e);
    }}
  >
    <option value="">Select Degree</option>
    <option value="Undergraduate">Undergraduate (UG)</option>
    <option value="Postgraduate">Postgraduate (PG)</option>
    <option value="Other">Other</option>
  </select>
  {errors.degree && (
    <span style={{ color: "red" }}>{errors.degree}</span>
  )}
</div>


        
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={(e) => {
              setPassword(e.target.value);
              handleChange(e);
            }}
          />
          {errors.password && (
            <span style={{ color: "red" }}>{errors.password}</span>
          )}
        </div>
        <button
          disabled={
            !formData.roll ||
            !formData.username ||
            !formData.year ||
            !formData.degree ||
            !formData.department ||
            !formData.password
          }
          className={`btn-login ${
            !formData.roll ||
            !formData.username ||
            !formData.year ||
            !formData.degree ||
            !formData.department ||
            !formData.password
              ? "btn-disabled"
              : ""
          }`}
          type="submit"
        >
          Register
        </button>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default AddStudent;