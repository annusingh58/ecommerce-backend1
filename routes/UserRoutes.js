import express from "express";
import { login, otpcheckRegisterEmail, otpcheckRegisterNumber, register } from "../controllers/UserControllers.js";
import { addProduct } from "../controllers/ProductControllers.js";



var router = express.Router();
 
router.post('/register',register);
router.post("/login",login);
router.post('/addProduct',addProduct)

router.post('/otpcheckRegisterNumber', otpcheckRegisterNumber);
router.post('/otpcheckRegisterEmail', otpcheckRegisterEmail);

export default router;
