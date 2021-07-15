import { Router } from "express";
import {create} from '../controllers/user/create'

const user = Router();

user.post("/", create);

export default user;