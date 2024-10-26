import { IsBoolean, IsOptional, IsString, MaxLength } from "class-validator";

export class GetTrainsDto {
    @IsBoolean()
    booking_available: boolean

    @IsString()
    @MaxLength(120)
    start_point: string

    @IsString()
    @MaxLength(120)
    end_point: string

    @IsString()
    @MaxLength(500)
    @IsOptional()
    stop_points?: string
}