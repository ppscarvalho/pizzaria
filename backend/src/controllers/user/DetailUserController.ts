import { Request, Response } from 'express'
import { DetailUserService } from '../../services/user/DetailUserService'

class DetailuserController {
    async handle(req: Request, res: Response) {
        const user_id = req.user_id;

        // Validar se o user_id é válido e se o usuário é o mesmo que está logado.
        const detailUserService = new DetailUserService();
        const user = await detailUserService.execute(user_id);
        res.json(user);
    }
}

export { DetailuserController }