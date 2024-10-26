import { IsInt } from "class-validator";

export class GetOneWagonDto {
    @IsInt()
    wagonId: number
}