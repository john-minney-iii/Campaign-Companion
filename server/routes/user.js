import express from "express";

// Controllers
import { getUsers, createUser } from "../controllers/user.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/", createUser);

export default router;
