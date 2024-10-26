import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsOptional, IsString, MaxLength } from "class-validator";

export class GetTrainsDto {
    @ApiProperty()
    @IsBoolean()
    booking_available: boolean

    @ApiProperty()
    @IsString()
    @MaxLength(120)
    start_point: string

    @ApiProperty()
    @IsString()
    @MaxLength(120)
    end_point: string

    @ApiProperty({ required: false })
    @IsString()
    @MaxLength(500)
    @IsOptional()
    stop_points?: string
}