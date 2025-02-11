import prismaClient from '../../prisma'

interface ProductRequest {
    name: string;
    description: string;
    price: string;
    banner: string;
    categoryId: string;
}

class CreateProductService {
    async execute({ name, description, price, banner, categoryId }: ProductRequest) {
        const product = await prismaClient.product.create({
            data: {
                name: name,
                description: description,
                price: price,
                banner: banner,
                categoryId: categoryId
            },
            select: {
                id: true,
                name: true,
                description: true,
                price: true,
                banner: true,
                categoryId: true,
            }
        })

        return product
    }
}

export { CreateProductService }