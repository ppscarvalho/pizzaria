import { Request, Response } from 'express'
import { DeleteOrderService } from '../../services/order/DeleteOrderService'

class DeleteOrderController {
    async handle(req: Request, res: Response) {
        const { id } = req.params as { id: string };
        const deleteOrderService = new DeleteOrderService();
        const order = await deleteOrderService.execute({
            orderId: id
        });

        res.json(order);
    }
}

export { DeleteOrderController }