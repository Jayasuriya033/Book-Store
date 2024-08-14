// import express from "express";
// import { Student } from "../models/Student.js";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";
// import axios from "axios";

// const studentRouter1 = express.Router();

// studentRouter1.post("/login", async (req, res) => {
//   try {
//     const { username, password, captchaToken } = req.body;

//     // Verify captcha token
//     const secretKey = process.env.RECAPTCHA_SECRET_KEY;
//     const response = await axios.post(
//       `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`
//     );

//     if (!response.data.success) {
//       return res.json({ message: "Failed captcha verification" });
//     }

//     const student = await Student.findOne({ username });
//     if (!student) {
//       return res.json({ message: "Student not registered" });
//     }
//     const validPassword = await bcrypt.compare(password, student.password);
//     if (!validPassword) {
//       return res.json({ message: "Wrong password" });
//     }
//     const token = jwt.sign(
//       { username: student.username, role: "student" },
//       process.env.STUDENT_KEY
//     );
//     res.cookie("token", token, { httpOnly: true, secure: false });
//     return res.json({ login: true, username: student.username, role: 'student' });

//   } catch (err) {
//     res.json(err);
//   }
// });

// export default studentRouter1;


import express from "express";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import axios from "axios";

const prisma = new PrismaClient();
const studentRouter1 = express.Router();

studentRouter1.post("/login", async (req, res) => {
  try {
    const { username, password, captchaToken } = req.body;

    // Verify captcha token
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`
    );

    if (!response.data.success) {
      return res.json({ message: "Failed captcha verification" });
    }

    const student = await prisma.student.findUnique({
      where: { username },
    });
    if (!student) {
      return res.json({ message: "Student not registered" });
    }
    const validPassword = await bcrypt.compare(password, student.password);
    if (!validPassword) {
      return res.json({ message: "Wrong password" });
    }
    const token = jwt.sign(
      { username: student.username, role: "student" },
      process.env.STUDENT_KEY
    );
    res.cookie("token", token, { httpOnly: true, secure: false });
    return res.json({ login: true, username: student.username, role: 'student' });

  } catch (err) {
    res.json({ message: "Error during login", error: err });
  }
});

export default studentRouter1;
