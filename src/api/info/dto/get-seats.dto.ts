import { IsInt } from "class-validator";

export class GetSeatsDto {
    @IsInt()
    wagonId: number
}