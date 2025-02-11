import { Request, Response } from 'express';
import { ListByCategoryProductService } from '../../services/product/ListByCategoryProductService';

class ListByCategoryProductController {
    async handle(req: Request, res: Response) {
        const { categoryId } = req.params as { categoryId: string };
        console.log(categoryId);
        const listByCategoryProductService = new ListByCategoryProductService();
        const products = await listByCategoryProductService.execute(categoryId);
        res.json(products);
    }
}
export { ListByCategoryProductController }