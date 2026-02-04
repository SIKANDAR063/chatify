import express from "express";
// import { signup, login, logout, updateProfile } from "../controllers/auth.controller.js";
// import { protectRoute } from "../middleware/auth.middleware.js";
// import { arcjetProtection } from "../middleware/arcjet.middleware.js";

const router = express.Router();

// router.use(arcjetProtection);

router.get('/send', (req, res) => {
  res.send(' send message Hello World!');
});

export default router;