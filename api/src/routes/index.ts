import { Router, Request, Response, NextFunction } from "express";
import home from '../controllers/home'



const router = Router();

//routes
router.use("/", home);


//exports
export default router;
