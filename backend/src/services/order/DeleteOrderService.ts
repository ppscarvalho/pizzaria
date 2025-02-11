import prismaClient from "../../prisma";

interface OrderRequest {
    orderId: string;
}

class DeleteOrderService {
    async execute({ orderId }: OrderRequest) {
        const order = await prismaClient.order.delete({
            where: {
                id: orderId
            },
            select: {
                id: true,
                table: true,
                name: true,
            }
        });

        return order;
    }
}

export { DeleteOrderService }