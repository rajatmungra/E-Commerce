import { userSignup,userLogin } from "../controller/user-controller.js";

import express from "express";

const router =express.Router();

router.post('/signup',userSignup);
router.post('/login', userLogin);

export default router;