import { Request, Response } from 'express';
import db from "../../models"


export async function read(req: Request, res: Response) {
    const { firstName, lastName, email } = req.body;

    console.log('aca', firstName, lastName, email)
    let user = ''
    if(email){
        try {
            user = await db.User.findOne({
                where: { email: email }});
            if(user!=null){
                res.send(user)
            } else res.send('email does not exist')
        } catch(error) {
            res.send(error)
        }
    } else res.send('email missing')
}
