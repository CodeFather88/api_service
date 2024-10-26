import { Controller, Get, Query } from "@nestjs/common";
import { InfoService } from "./info.service";
import { GetTrainsDto } from "./dto/get-trains.dto";
import { GetOneTrainDto } from "./dto/get-one-train.dto";
import { GetWagonsDto } from "./dto/get-wagons.dto";
import { GetOneWagonDto } from "./dto/get-one-wagon.dto";
import { GetSeatsDto } from "./dto/get-seats.dto";
import { GetOneSeatDto } from "./dto/get-one-seat.dto";

@Controller('info')
export class InfoController {
    constructor(private readonly infoService: InfoService) { }

    @Get('trains')
    async getTrains(@Query() query: GetTrainsDto) {
        return this.infoService.getTrains(query);
    }

    @Get('train')
    async getOneTrain(@Query() query: GetOneTrainDto) {
        return this.infoService.getOneTrain(query);
    }

    @Get('wagons')
    async getWagons(@Query() query: GetWagonsDto) {
        return this.infoService.getWagons(query);
    }

    @Get('wagon')
    async getOneWagon(@Query() query: GetOneWagonDto) {
        return this.infoService.getOneWagon(query);
    }

    @Get('seats')
    async getSeats(@Query() query: GetSeatsDto) {
        return this.infoService.getSeats(query);
    }

    @Get('seat')
    async getOneSeat(@Query() query: GetOneSeatDto) {
        return this.infoService.getOneSeat(query);
    }
}
