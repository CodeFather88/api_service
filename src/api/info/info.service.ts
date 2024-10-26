import { Injectable } from "@nestjs/common";
import { RequestService } from "../request/request.service";
import { GetTrainsDto } from "./dto/get-trains.dto";
import { GetOneTrainDto } from "./dto/get-one-train.dto";
import { GetWagonsDto } from "./dto/get-wagons.dto";
import { GetOneWagonDto } from "./dto/get-one-wagon.dto";
import { GetSeatsDto } from "./dto/get-seats.dto";
import { GetOneSeatDto } from "./dto/get-one-seat.dto";
import { MessagePattern, Transport } from "@nestjs/microservices";
import { RedisService } from "src/redis/redis.service";

@Injectable()
export class InfoService {
    constructor(
        private readonly requestService: RequestService,
        private readonly redisService: RedisService
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
        let trains;
        // trains = await this.redisService.client.get(`trains_${data.start_point}_${data.end_point}`);
        // if (!trains) {
        trains = await this.requestService.get({
            path: `/info/trains?booking_available=${data.booking_available}&start_point=${data.start_point}&end_point=${data.end_point}${data.stop_points ? `&stop_points=${data.stop_points}` : ''}`
        });
        // setTimeout(() => {
        //     this.redisService.client.set(`trains_${data.start_point}_${data.end_point}`, trains);
        // }, 0);
        return { trains };
        // }
        // return { trains: JSON.parse(trains) }; // Возвращаем данные из кэша
    }

    @MessagePattern('getOneTrain')
    public async getOneTrain(data: GetOneTrainDto) {
        let train;
        // train = await this.redisService.client.get(`train_${data.trainId}`);
        // if (!train)
        train = await this.requestService.get({
            path: `/info/train/${data.trainId}`
        });
        // setTimeout(() => {
        //     this.redisService.client.set(`train_${data.trainId}`, train);
        // });
        return { train };
    }

    @MessagePattern('getWagons')
    public async getWagons(data: GetWagonsDto) {
        let wagons;
        // wagons = await this.redisService.client.get(`wagons_${data.trainId}`);
        // if (!wagons) {
        wagons = await this.requestService.get({
            path: `/info/wagons?trainId=${data.trainId}`
        });
        // setTimeout(() => {
        //     this.redisService.client.set(`wagons_${data.trainId}`, JSON.stringify(wagons));
        // }, 0);
        // } else {
        //     wagons = JSON.parse(wagons);
        // }
        return { wagons };
    }

    @MessagePattern('getOneWagon')
    public async getOneWagon(data: GetOneWagonDto) {
        let wagon;
        // wagon = await this.redisService.client.get(`wagon_${data.wagonId}`);
        // if (!wagon) {
        wagon = await this.requestService.get({
            path: `/info/wagons/${data.wagonId}`
        });
        // setTimeout(() => {
        //     this.redisService.client.set(`wagon_${data.wagonId}`, JSON.stringify(wagon));
        // }, 0);
        // } else {
        //     wagon = JSON.parse(wagon);
        // }
        return { wagon };
    }

    @MessagePattern('getSeats')
    public async getSeats(data: GetSeatsDto) {
        let seats;
        // seats = await this.redisService.client.get(`seats_${data.wagonId}`);
        // if (!seats) {
        seats = await this.requestService.get({
            path: `/info/seats?wagonId=${data.wagonId}`
        });
        // setTimeout(() => {
        //     this.redisService.client.set(`seats_${data.wagonId}`, JSON.stringify(seats));
        // }, 0);
        // } else {
        //     seats = JSON.parse(seats);
        // }
        return { seats };
    }

    @MessagePattern('getOneSeat')
    public async getOneSeat(data: GetOneSeatDto) {
        let seat;
        // seat = await this.redisService.client.get(`seat_${data.seatId}`);
        // if (!seat) {
        seat = await this.requestService.get({
            path: `/info/seats/${data.seatId}`
        });
        // setTimeout(() => {
        //     this.redisService.client.set(`seat_${data.seatId}`, JSON.stringify(seat));
        // }, 0);
        // } else {
        //     seat = JSON.parse(seat);
        // }
        return { seat };
    }
}