import { Request, Response } from 'express';
import { UpdateProductService } from '../../services/product/UpdateProductService';

class UpdateProductController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { name, description, price, categoryId } = req.body;
        const { originalname, filename: banner } = req.file;
        const updateProductService = new UpdateProductService();
        const product = await updateProductService.execute({
            id,
            name,
            description,
            price,
            banner,
            categoryId
        });

        res.json(product)
    }
}

export { UpdateProductController }