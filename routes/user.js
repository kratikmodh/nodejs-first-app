import express from "express";
import {
  getAllUsers,
  getUserDetails,
  register,
  specialCase,
} from "../controllers/user.js";

const router = express.Router();

router.get("/all", getAllUsers);

router.post("/new", register);

router.get("/userid/special", specialCase);

router.get("/userid/:id", getUserDetails);

export default router;
