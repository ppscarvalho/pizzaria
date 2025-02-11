import { Request, Response } from 'express';
import { ListCategoryService } from '../../services/category/ListCategoryService';

class ListCategoryController {
    async handle(req: Request, res: Response) {
        const findAllCategoryService = new ListCategoryService();
        const categories = await findAllCategoryService.execute();
        res.json(categories);
    }
}

export { ListCategoryController }