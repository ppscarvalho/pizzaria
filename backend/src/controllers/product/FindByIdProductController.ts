import { Request, Response } from 'express';
import { FindByIdProductService } from '../../services/product/FindByIdProductService';

class FindByIdProductController {
    async handle(req: Request, res: Response) {
        const { id } = req.params as { id: string };
        const findByIdProductService = new FindByIdProductService();
        const product = await findByIdProductService.execute(id);
        res.json(product);
    }
}

export { FindByIdProductController }