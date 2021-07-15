import { Request, Response } from 'express';
import db from "../../models"


export async function create(req: Request, res: Response) {
    const { id, name, price, stock, image } = req.body;

        try {
            const product = await db.Product.findOrCreate({
                where: { productId: id },
                defaults: {
                    name: name,
                    price: price,
                    stock: stock,
                    image: image
                }
            });
            if (product[1] === true) {
                res.send('product created')
            } else
                if (product[1] === false) {
                    res.send('product already exists')
                } else
                    res.status(500).send('Something broke!');
        } catch (error) {
            res.send(error)
        }
}
