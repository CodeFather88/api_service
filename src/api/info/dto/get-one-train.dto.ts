import { IsInt } from "class-validator";

export class GetOneTrainDto {
    @IsInt()
    trainId: number
}