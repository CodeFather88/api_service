import { ApiProperty } from "@nestjs/swagger";
import { IsInt } from "class-validator";

export class GetWagonsDto {
    @ApiProperty()
    @IsInt()
    trainId: number
}