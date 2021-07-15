import { Request, Response } from 'express';
import db from "../../models"


export async function login(req: Request, res: Response) {
    const { email, pass } = req.body;

    if(email){
        try {
            let user = await db.User.findOne({
                where: { email: email }});
            if(user!=null){
                if(user.password === pass){
                    res.send('authorized access')
                }
                else res.send('access denied')
            } else res.send('access denied')
        } catch(error) {
            res.send(error)
        }
    } else res.send('email missing')
}