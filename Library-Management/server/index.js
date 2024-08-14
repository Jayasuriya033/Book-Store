import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { PrismaClient } from "@prisma/client";
import { AuthRouter, verifyUser } from "./routes/auth.js";
import { bookRouter } from "./routes/book.js";
import { studentRouter } from "./routes/student.js";
import studentRouter1 from "./routes/student1.js";
import adminRouter from "./routes/admin.js";


dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(cookieParser());

app.use((req, res, next) => {
  req.prisma = prisma;
  next();
});

app.use("/auth", AuthRouter);
app.use("/book", bookRouter);
app.use("/student", studentRouter);
app.use("/student1", studentRouter1);
app.use("/admin", adminRouter);


app.get("/dashboard", verifyUser, async (req, res) => {
  try {
    const studentCount = await prisma.student.count();
    const bookCount = await prisma.book.count();
    const adminCount = await prisma.admin.count();

    const departmentCounts = await prisma.student.groupBy({
      by: ["department"],
      _count: {
        department: true,
      },
    });

    const dataMerge = departmentCounts.map((department) => ({
      name: department.department,
      count: department._count.department,
    }));
    const department = dataMerge.length; 

    var arr = dataMerge;
    var departmentData = arr.reduce(
      (obj, item) => Object.assign(obj, { [item.name]: item.count }),
      {}
    );
    return res.json({
      ok: true,
      student: studentCount,
      book: bookCount,
      admin: adminCount,
      departmentdata: departmentData,
      department: department,
    });
  } catch (err) {
    return res.json(err);
  }
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on port", process.env.PORT);
});
