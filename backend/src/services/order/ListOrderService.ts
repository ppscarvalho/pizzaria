import prismaClient from "../../prisma";

class ListOrderService {
    async execute() {
        const orders = await prismaClient.order.findMany({
            where: {
                status: false,
                draft: false,
            },
            select: {
                id: true,
                table: true,
                name: true,
            },
            orderBy: {
                created_at: 'desc',
            },
            take: 10,
        });

        return orders;
    }
}
export { ListOrderService };