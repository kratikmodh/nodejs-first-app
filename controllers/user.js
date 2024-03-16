import { User } from "../models/user.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.json({
    success: true,
    users: users,
  });
};

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  User.create({
    name,
    email,
    password,
  });

  res.status(201).cookie("tempi").json({
    success: true,
    message: "You have signed up successfully",
  });
};

export const getUserDetails = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.json({
    success: true,
    user,
  });
};

export const specialCase = async (req, res) => {
  res.json({
    success: true,
    message: "hello",
  });
};
