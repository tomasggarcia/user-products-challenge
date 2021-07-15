import { Request, Response } from 'express';
import db from "../../models"


export async function create(req: Request, res: Response) {
    const { firstName, lastName, email } = req.body;
    
    if(email){
        try{
            const user = await db.User.findOrCreate({
                where: { email: email },
                defaults: {
                    email: email,
                    firstName: firstName,
                    lastName: lastName
                }
            });
            if (user[1] === true) {
                res.send('user created')
            } else
            if (user[1] === false) {
                res.send('email already exists')
            } else
            res.status(500).send('Something broke!');
        }catch (error) {
            res.send(error)
        }
    } else res.send('invalid email')
}
