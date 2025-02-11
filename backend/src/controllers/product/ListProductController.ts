import { Request, Response } from 'express';
import { ListProductListService } from '../../services/product/ListProductService';

class ListProductController {
    async handle(req: Request, res: Response) {
        const listProductListService = new ListProductListService();
        const products = await listProductListService.execute();
        res.json(products);
    }
}

export { ListProductController }