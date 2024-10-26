import { ApiProperty } from "@nestjs/swagger";
import { IsInt } from "class-validator";

export class GetSeatsDto {
    @ApiProperty()
    @IsInt()
    wagonId: number
}