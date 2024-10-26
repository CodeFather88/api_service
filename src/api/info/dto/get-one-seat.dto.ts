import { IsInt } from "class-validator";

export class GetOneSeatDto {
    @IsInt()
    seatId: number
}