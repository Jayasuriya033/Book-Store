import React, { useState, useEffect } from "react";
import { BsFillArchiveFill, BsPeopleFill } from "react-icons/bs";
import axios from "axios";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { useNavigate } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
import "../App.css";

function Dashboard() {
  const [students, setStudents] = useState(0);
  const [admin, setAdmin] = useState(0);
  const [books, setBooks] = useState(0);
  const [dept, setDept] = useState(0);
  const [deptData, setDeptData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8001/dashboard")
      .then((res) => {
        if (res.data.ok) {
          setStudents(res.data.student);
          setAdmin(res.data.admin);
          setBooks(res.data.book);
          setDept(res.data.department);
          setDeptData(res.data.departmentdata);
        } else {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(deptData);

  function handleDeptData() {
    for (const [department, count] of Object.entries(deptData)) {
      console.log(`${department} : ${count}`);
    }
  }

  const data = [
    { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>Total Books</h3>
            <BsFillArchiveFill className="card-icon" />
          </div>
          <h2>{books}</h2>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Total Student</h3>
            <BsFillArchiveFill className="card-icon" />
          </div>
          <h2>{students}</h2>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Total Admins</h3>
            <BsPeopleFill className="card-icon" />
          </div>
          <h2>{admin}</h2>
        </div>
        <div className="card">
          <div style={{ color: "white" }} className="card-inner">
            <h3>Total Department</h3>
            <FaAngleDoubleRight className="card-icon"
            // className="dept-details"
            style={{
              color:'white',
              // position: "fixed",
              bottom: "20px",
              left: "20px",
              cursor: "pointer",
            }}
            onClick={handleDeptData}
            />
          </div>
          <h2 style={{ color: "white" }}>{dept}</h2>
          {/* <FaAngleDoubleRight
            className="dept-details"
            style={{
              color:'white',
              // position: "fixed",
              bottom: "20px",
              left: "20px",
              cursor: "pointer",
            }}
            onClick={handleDeptData}
          /> */}
        </div>
      </div>

      <div className="charts">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Dashboard;
