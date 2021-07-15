import { Request, Response } from "express";

function home(req: Request, res: Response){
    res.send('hdsafome')
}


export default home