// src/routes/camioneroRoutes.ts
import express, {Request, Response} from "express";
import { getAllCamioneros, createCamionero } from '../controllers/camioneroController';

const camioneroRouter = express.Router();

camioneroRouter.get('/', (req: Request, res: Response) => {
    res.send("Hello World");
});
camioneroRouter.post('/', createCamionero);

export default camioneroRouter;
