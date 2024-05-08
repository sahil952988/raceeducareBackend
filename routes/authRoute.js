import express from "express";
import {
  applyController,
  testController,
} from "../controller/authController.js";
import { isAdmin, requireSignIn } from "../Middleware/authMiddleware.js";

//router object
const router = express.Router();

//routing
//Apply || METHOD POST
router.post("/apply", applyController);


//test routes
router.get("/test", requireSignIn, isAdmin, testController);

export default router;