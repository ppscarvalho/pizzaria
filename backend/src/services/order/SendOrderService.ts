import prismaClient from '../../prisma';

interface OrderRequest {
    orderId: string;
}

class SendOrderService {
    async execute({ orderId }: OrderRequest) {
        const order = await prismaClient.order.update({
            where: {
                id: orderId
            },
            data: {
                draft: false,
            },
            select: {
                id: true,
                table: true,
                name: true,
                draft: true,
                status: true
            }
        });

        return order
    }
}

export { SendOrderService }