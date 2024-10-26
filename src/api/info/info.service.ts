import { Injectable } from "@nestjs/common";
import { RequestService } from "../request/request.service";
import { GetTrainsDto } from "./dto/get-trains.dto";
import { GetOneTrainDto } from "./dto/get-one-train.dto";
import { GetWagonsDto } from "./dto/get-wagons.dto";
import { GetOneWagonDto } from "./dto/get-one-wagon.dto";
import { GetSeatsDto } from "./dto/get-seats.dto";
import { GetOneSeatDto } from "./dto/get-one-seat.dto";
import { MessagePattern, Transport } from "@nestjs/microservices";

@Injectable()
export class InfoService {
    constructor(
        private readonly requestService: RequestService,
    ) {
        // this.test()
    }

    test = async () => {
        let i = 0
        while (i < 100) {
            const seats: any = await this.getSeats({ wagonId: 3 }).then(e => console.log('a'))
            // if (seats.error) {
            //     console.log(seats)
            //     console.log(i)
            // }
            console.log(++i)
        }
    }

    @MessagePattern('getTrains')
    public async getTrains(data: GetTrainsDto) {
        const trains = await this.requestService.get({
            path: `/info/trains?booking_available=${data.booking_available}&start_point=${data.start_point}&end_point=${data.end_point}${data.stop_points ? `&stop_points=${data.stop_points}` : ''}`
        });
        return { trains };
    }

    @MessagePattern('getOneTrain')
    public async getOneTrain(data: GetOneTrainDto) {
        const train = await this.requestService.get({
            path: `/info/train/${data.trainId}`
        });
        return { train };
    }

    @MessagePattern('getWagons')
    public async getWagons(data: GetWagonsDto) {
        const wagons = await this.requestService.get({
            path: `/info/wagons?trainId=${data.trainId}`
        });
        return { wagons };
    }

    @MessagePattern('getOneWagon')
    public async getOneWagon(data: GetOneWagonDto) {
        const wagon = await this.requestService.get({
            path: `/info/wagons/${data.wagonId}`
        });
        return { wagon };
    }

    @MessagePattern('getSeats')
    public async getSeats(data: GetSeatsDto) {
        const seats = await this.requestService.get({
            path: `/info/seats?wagonId=${data.wagonId}`
        });
        console.log(seats);
        return { seats };
    }

    @MessagePattern('getOneSeat')
    public async getOneSeat(data: GetOneSeatDto) {
        const seat = await this.requestService.get({
            path: `/info/seats/${data.seatId}`
        });
        return { seat };
    }
}