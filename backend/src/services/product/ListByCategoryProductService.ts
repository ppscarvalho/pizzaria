import prismaClient from '../../prisma';

class ListByCategoryProductService {
    async execute(categoryId: string) {
        const products = await prismaClient.product.findMany({
            where: {
                categoryId: categoryId
            },
            select: {
                id: true,
                name: true,
                description: true,
                price: true,
                banner: true,
                categoryId: true
            }
        });

        return products;
    }
}

export { ListByCategoryProductService }