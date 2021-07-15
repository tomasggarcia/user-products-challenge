import { Request, Response } from 'express';
import db from "../../models"


export async function read(req: Request, res: Response) {
    const { id, name, price, stock, image } = req.body;


    if(id){
        try {
            const product = await db.Product.findOne({
                where: { productId: id }});
            if(product!=null){
                res.send(product)
            } else res.send('product does not exist')
        } catch(error) {
            res.send(error)
        }
    } else res.send('productId missing')
}
