import { IsInt } from "class-validator";

export class GetWagonsDto {
    @IsInt()
    trainId: number
}