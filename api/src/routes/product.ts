import { Router } from "express";
import {create} from '../controllers/product/create'

const product = Router();

product.use("/", create);

export default product;