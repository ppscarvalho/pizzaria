import { Request, Response } from 'express';
import { CreateItemOrderService } from '../../services/order/CreateItemOrderService';

class CreateItemOrderController {
    async handle(req: Request, res: Response) {
        const { amount, orderId, productId } = req.body;

        const createItemOrderService = new CreateItemOrderService();
        const item = await createItemOrderService.execute({
            amount,
            orderId,
            productId
        });

        res.json(item);
    }
}

export { CreateItemOrderController }