import { Request, Response } from 'express';
import db from "../../models"


export async function deleteProduct (req: Request, res: Response) {
    const { id, name, price, stock, image } = req.body;


    if (id) {
        try {
            const user = await db.Product.destroy({
                where: { productId: id },
                force: true
            });
            if(user===1){
                res.send('product deleted')
            } else {
                res.send('product does not exist')
            }
        } catch (error) {
            res.send(error)
        }
    } else res.send('missing productId')

}
