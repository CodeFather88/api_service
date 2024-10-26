import { Injectable } from "@nestjs/common";
import { RequestService } from "../request/request.service";
import { CreateOrderDto } from "./dto/create-order.dto";

@Injectable()
export class OrderService {
    constructor(private readonly requestService: RequestService) { }

    public createOrder = async (body: CreateOrderDto) => {
        const order = await this.requestService.post({
            path: `/order`,
            body: JSON.stringify(body)
        })
        return { order }
    }
}