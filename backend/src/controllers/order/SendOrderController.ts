import { Request, Response } from 'express'
import { SendOrderService } from '../../services/order/SendOrderService'

class SendOrderController {
    async handle(req: Request, res: Response) {
        const { orderId } = req.body;

        if (!orderId) {
            res.status(400).json({ error: 'orderId is required' });
        }

        const sendOrderService = new SendOrderService();
        const order = await sendOrderService.execute({
            orderId: orderId,
        });

        res.json(order);
    }
}

export { SendOrderController }