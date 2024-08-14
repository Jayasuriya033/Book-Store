import express from "express";
import jwt from "jsonwebtoken";


const router = express.Router();

export const verifyAdmin = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ message: "Invalid Admin" });
  }
  jwt.verify(token, process.env.Admin_Key, (err, decoded) => {
    if (err) {
      return res.json({ message: "Invalid token" });
    }
    req.username = decoded.username;
    req.role = decoded.role;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  // const decoded = jwt.decode(token);
  // console.log(decoded);
  if (!token) {
    return res.json({ message: "Invalid User" });
  }
  jwt.verify(token, process.env.Admin_Key, (err, decodedAdmin) => {
    if (err) {
      jwt.verify(token, process.env.Student_Key, (err, decodedStudent) => {
        if (err) {
          return res.json({ message: "Invalid token" });
        }
        req.username = decodedStudent.username;
        req.role = decodedStudent.role;
        next();
      });
    } else {
      req.username = decodedAdmin.username;
      req.role = decodedAdmin.role;
      next();
    }
  });
};

router.get("/verify", verifyUser, (req, res) => {
  return res.json({ login: true, role: req.role });
});

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ logout: true });
});





export { router as AuthRouter };
