import { IsArray, IsInt } from "class-validator"

export class CreateOrderDto {
    @IsInt()
    trainId: number

    @IsInt()
    wagonId: number

    @IsInt()
    @IsArray()
    seat_ids: number[]
}