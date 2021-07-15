import { Router } from "express";

import { create } from '../controllers/user/create'
import { read } from '../controllers/user/read'
import { update } from '../controllers/user/update'
import { login } from '../controllers/user/login'

const user = Router();

user.post("/", create);
user.get("/", read);
user.put("/", update);
user.get("/login", login);

export default user;