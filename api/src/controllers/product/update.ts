import { Request, Response } from 'express';
import db from "../../models"


export async function update(req: Request, res: Response) {
    const { id, name, price, stock, image } = req.body;

    if (id) {
        try {
            const product = await db.Product.update({name:name,price:price,stock:stock,image:image},{
                where: { productId: id }
            });
            console.log(product)
            if(product[0]===0){
                res.send('product does not exist')
            } else {
                res.send('product updated')
            }
        } catch (error) {
            res.send(error)
        }
    } else res.send('productId missing')
}
