import express, {Request, Response} from "express";
// import controller from "../controllers/admin";
import { isAdmin } from "../middlewares";

const adminRouter = express.Router();

adminRouter.post("/", isAdmin, (req: Request, res: Response) =>
    controller(req, res)
);

adminRouter.post("./dashboard", isAdmin, (req: Request, res: Response) => {
    res.send("Welcome to the admin dashboard");
});