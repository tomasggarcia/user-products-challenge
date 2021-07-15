import { Router, Request, Response, NextFunction } from "express";
import home from '../controllers/home'
import user from './user'
import product from './product'



const router = Router();

//routes
router.use("/", home);
router.use("/user", user)
router.use("/product", product)

//exports
export default router;
