import { Request, Response } from 'express'
import { DetailsOrderService } from '../../services/order/DetailsOrderService'

class DetailsOrderController {
    async handle(req: Request, res: Response) {
        const { id } = req.params as { id: string };
        const detailsOrderService = new DetailsOrderService();
        const items = await detailsOrderService.execute({
            orderId: id
        });

        res.json(items);
    }
}

export { DetailsOrderController }

