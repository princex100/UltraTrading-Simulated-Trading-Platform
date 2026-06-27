import { Router } from "express";

const router = Router();

// TODO: Define user routes (e.g., /register, /login, /logout, /profile)
// router.route("/register").post(registerUser)
// router.route("/login").post(loginUser)
import { registerUser } from "../controllers/user.controller.js";
import { verifyEmail } from "../controllers/user.controller.js";


export default router;

router.post("/register", registerUser);
router.post("/verify-email", verifyEmail);