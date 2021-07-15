import { Request, Response } from 'express';
import db from "../../models"


export async function create(req: Request, res: Response) {
    const { firstName, lastName, email } = req.body;

    console.log('aca', firstName, lastName, email)
    const user = await db.User.findOrCreate({
        where: { email: email },
        defaults: {
            email: email,
            firstName: firstName,
            lastName: lastName
        }
    });

    if (user[1] === true) {
        res.send('email created')
    }
    if (user[1] === false) {
        res.send('email already exists')
    }
    res.status(500).send('Something broke!');
}
