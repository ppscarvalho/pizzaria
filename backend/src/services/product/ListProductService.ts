import prismaClient from '../../prisma';

class ListProductListService {
    async execute() {
        const products = await prismaClient.product.findMany({
            select: {
                id: true,
                name: true,
                description: true,
                price: true,
                banner: true,
                categoryId: true
            }
        })

        return products;
    }
}

export { ListProductListService }
