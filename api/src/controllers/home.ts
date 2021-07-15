import { Request, Response } from "express";

function home(req: Request, res: Response){
    res.send('hello world')
}


export default home