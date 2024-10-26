import { ApiProperty } from "@nestjs/swagger";
import { IsInt } from "class-validator";

export class GetOneSeatDto {
    @ApiProperty()
    @IsInt()
    seatId: number
}