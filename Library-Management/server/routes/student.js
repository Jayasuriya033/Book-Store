import express from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
const router = express.Router();

const departmentModels = {
  automobile: prisma.automobile,
  civil: prisma.civil,
  cse: prisma.cse,
  ece: prisma.ece,
  eee: prisma.eee,
  it: prisma.it,
  mech: prisma.mech,
  mca: prisma.mca,
  mba: prisma.mba
};

router.post("/register", async (req, res) => {
  try {
    const { username, password, roll, year, degree, department } = req.body;

    // Check if the student is already registered
    const existingStudent = await prisma.student.findUnique({
      where: { username },
    });
    if (existingStudent) {
      return res.json({ message: "Student is already registered" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the student
    await prisma.student.create({
      data: {
        username,
        password: hashedPassword,
        roll,
        year,
        degree,
        department,
      },
    });

    const dbname = department.toLocaleLowerCase();
    const departmentModel = departmentModels[dbname];

    if (departmentModel) {
      await departmentModel.create({
        data: {
          username,
          password: hashedPassword,
          roll,
          year,
          degree,
        },
      });
      return res.json({ registered: true });
    } else {
      console.log("Database didn't connect!!!");
      return res.status(400).json({ message: "Invalid department" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error in registering student" });
  }
});

export { router as studentRouter };
