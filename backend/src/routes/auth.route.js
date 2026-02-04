import express from "express";
// import { signup, login, logout, updateProfile } from "../controllers/auth.controller.js";
// import { protectRoute } from "../middleware/auth.middleware.js";
// import { arcjetProtection } from "../middleware/arcjet.middleware.js";

const router = express.Router();

// router.use(arcjetProtection);

router.get('/signup', (req, res) => {
  res.send('Hello World!');
});

router.get('/login', (req, res) => {
  res.send('login into Hello World!');
});

router.get('/logout', (req, res) => {
  res.send('Hello World! get logout');
});

// router.put("/update-profile", protectRoute, updateProfile);

// router.get("/check", protectRoute, (req, res) => res.status(200).json(req.user));

export default router;