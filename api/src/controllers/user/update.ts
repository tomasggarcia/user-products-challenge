import { Request, Response } from 'express';
import db from "../../models"


export async function update(req: Request, res: Response) {
    const { firstName, lastName, email } = req.body;

    var user = []
    console.log(email)
    if (email) {
        try {
            user = await db.User.update({firstName:firstName,lastName:lastName},{
                where: { email: email }
            });
            if(user[0]===0){
                res.send('email does not exist')
            } else {
                res.send('user updated')
            }
        } catch (error) {
            res.send(error)
        }
    } else res.send('email missing')

    res.status(500).send('Something broke!');
}
