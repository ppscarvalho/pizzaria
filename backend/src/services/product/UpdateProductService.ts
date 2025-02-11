import prismaClient from "../../prisma";

interface ProductRequest {
    id: string;
    name: string;
    description: string;
    price: string;
    banner: string;
    categoryId: string;
}

class UpdateProductService {
    async execute({ id, name, description, price, banner, categoryId }: ProductRequest) {
        const product = await prismaClient.product.update({
            where: {
                id: id
            },
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

export { UpdateProductService }