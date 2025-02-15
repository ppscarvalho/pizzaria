import { Request, Response } from 'express'
import { CreateProductService } from '../../services/product/CreateProductService'
import { UploadedFile } from 'express-fileupload';
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
})

class CreateProductController {
    async handle(req: Request, res: Response) {
        const { name, description, price, categoryId } = req.body;

        if (!req.files || Object.keys(req.files).length === 0) {
            throw new Error('Error upload file')
        } else {

            //const { originalname, filename: banner } = req.file

            // Upload an image
            const file: UploadedFile = req.files['file'];
            const resultFile: UploadApiResponse = await new Promise((resolve, reject) => {
                cloudinary.uploader.upload_stream({}, function (error, result) {
                    if (error) {
                        reject(error);
                        return
                    }
                    resolve(result);
                }).end(file.data);
            });
            //const { originalname, filename: banner } = req.file

            const createProductService = new CreateProductService();
            const product = await createProductService.execute({
                name,
                description,
                price,
                banner: resultFile.url,
                categoryId
            });
            res.json(product);
        }
    }
}

export { CreateProductController }