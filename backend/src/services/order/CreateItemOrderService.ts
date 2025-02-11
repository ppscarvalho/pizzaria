import prismaClient from "../../prisma";

interface ItemRequest {
    amount: number;
    orderId: string;
    productId: string;
}

class CreateItemOrderService {
    async execute({ amount, orderId, productId }: ItemRequest) {
        const item = await prismaClient.item.create({
            data: {
                amount: amount,
                orderId: orderId,
                productId: productId
            },
            select: {
                id: true,
                amount: true,
                orderId: true,
                productId: true,
            }
        });

        return item;
    }
}

export { CreateItemOrderService }