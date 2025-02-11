import { Request, Response } from 'express'
import { FinishOrderService } from '../../services/order/FinishOrderService'

class FinishOrderController {
    async handle(req: Request, res: Response) {
        const { orderId } = req.body;

        if (!orderId) {
            res.status(400).json({ error: 'orderId is required' });
        }

        const finishOrderService = new FinishOrderService();
        const order = await finishOrderService.execute({
            orderId: orderId,
        });

        res.json(order);
    }
}

export { FinishOrderController }