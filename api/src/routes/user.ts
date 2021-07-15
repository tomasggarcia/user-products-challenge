import { Router } from "express";
import {create} from '../controllers/user/create'

const user = Router();

user.use("/", create);

export default user;