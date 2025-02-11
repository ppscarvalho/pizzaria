import { Request, Response } from 'express'
import { CreateProductService } from '../../services/product/CreateProductService'

class CreateProductController {
    async handle(req: Request, res: Response) {
        const { name, description, price, categoryId } = req.body;

        if (!req.file) {
            throw new Error('Error upload file')
        }

        const { originalname, filename: banner } = req.file

        const createProductService = new CreateProductService();
        const product = await createProductService.execute({
            name,
            description,
            price,
            banner,
            categoryId
        });
        res.json(product);
    }
}

export { CreateProductController }