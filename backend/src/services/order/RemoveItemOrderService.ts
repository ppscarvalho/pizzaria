import prismaClient from "../../prisma";

interface ItemRequest {
    itemId: string;
}

class RemoveItemOrderService {
    async execute({ itemId }: ItemRequest) {
        const item = await prismaClient.item.delete({
            where: {
                id: itemId
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

export { RemoveItemOrderService }
