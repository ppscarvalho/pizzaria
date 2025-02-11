import prismaClient from '../../prisma';

class FindByIdProductService {
    async execute(id: string) {
        const product = await prismaClient.product.findFirst({
            where: {
                id: id
            },
            select: {
                id: true,
                name: true,
                description: true,
                price: true,
                banner: true,
                categoryId: true,
            }
        });

        return product
    }
}

export { FindByIdProductService }