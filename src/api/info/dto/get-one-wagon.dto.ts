import { ApiProperty } from "@nestjs/swagger";
import { IsInt } from "class-validator";

export class GetOneWagonDto {
    @ApiProperty()
    @IsInt()
    wagonId: number
}