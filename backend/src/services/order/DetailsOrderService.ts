import prismaClient from '../../prisma';

interface ItemOrderRequest {
    orderId: string;
}

class DetailsOrderService {
    async execute({ orderId }: ItemOrderRequest) {
        const items = await prismaClient.item.findMany({
            where: {
                orderId: orderId
            },
            select: {
                id: true,
                amount: true,
                orderId: true,
                productId: true,
                order: {
                    select: {
                        id: true,
                        table: true,
                        name: true,
                        status: true,
                        draft: true
                    }
                },
                product: {
                    select: {
                        id: true,
                        name: true,
                        description: true,
                        price: true,
                        banner: true,
                        categoryId: true,
                        category: {
                            select: {
                                id: true,
                                name: true,
                            }
                        }
                    }
                }
            }
        });

        return items;
    }
}

export { DetailsOrderService }
