import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { registerUser, verifyEmail, login, getCurrentUser } from "../controllers/user.controller.js";


const router = Router();


router.post("/register", registerUser);
router.post("/verify-email", verifyEmail);
router.post("/login", login);

// Secure routes
router.get("/current-user", verifyJWT, getCurrentUser);


export default router;