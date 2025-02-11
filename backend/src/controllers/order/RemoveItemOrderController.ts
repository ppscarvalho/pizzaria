import { Request, Response } from 'express';
import { RemoveItemOrderService } from '../../services/order/RemoveItemOrderService';

class RemoveItemOrderController {
    async handle(req: Request, res: Response) {
        const { id } = req.params as { id: string };
        const removeItemOrderService = new RemoveItemOrderService();
        const item = await removeItemOrderService.execute({
            itemId: id
        });

        res.json(item);
    }
}

export { RemoveItemOrderController }