import express from "express";
import { registerContactUs } from "../controller/messageController.js";

const router = express.Router();

router.post('/', registerContactUs);

export default router;
