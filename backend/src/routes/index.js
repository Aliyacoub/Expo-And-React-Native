import express from "express";

import * as userController from "../controllers/userController";

import * as doctorController from "../controllers/doctorController";

import validate from "../handlers/validation";

import { SaveUser } from "../middlewares/validators";

import isLoggedIN from "../middlewares/auth";

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: "hi ali" });
})

//user routes
router.post('/account/signup', validate(SaveUser), userController.register);

router.post('/account/signin', userController.login);

router.get('/account/me', isLoggedIN, userController.me);


router.get('/account/profile', isLoggedIN, userController.getProfile);


//doctor routes
router.get('/doctors', doctorController.index);


export default router;