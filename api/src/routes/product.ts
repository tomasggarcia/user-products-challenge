import { Router } from "express";
import {create} from '../controllers/product/create'
import {read} from '../controllers/product/read'
import {update} from '../controllers/product/update'
import {deleteProduct} from '../controllers/product/delete'


const product = Router();

product.post("/", create);
product.get("/", read);
product.put("/", update);
product.delete("/", deleteProduct);


export default product;