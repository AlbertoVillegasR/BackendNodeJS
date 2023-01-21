import { json, NextFunction, Request, Response, Router } from "express";
import app from "../../app";
import { ClienteServices } from "../../services/clientes/clientes.service";

const router = Router();
router.post('/listarPersonas', async (req: Request, res: Response, next: NextFunction) => {
    try {       
        // let body = JSON.parse(req.body)
        res.json(await ClienteServices.listar(req.body));
    } catch (error) {
        next(error);
    }
});
export default router;