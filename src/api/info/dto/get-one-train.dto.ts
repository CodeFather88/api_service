import { ApiProperty } from "@nestjs/swagger";
import { IsInt } from "class-validator";

export class GetOneTrainDto {
    @ApiProperty()
    @IsInt()
    trainId: number
}