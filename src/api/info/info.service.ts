import { Injectable } from "@nestjs/common";
import { RequestService } from "../request/request.service";
import { GetTrainsDto } from "./dto/get-trains.dto";
import { GetOneTrainDto } from "./dto/get-one-train.dto";
import { GetWagonsDto } from "./dto/get-wagons.dto";
import { GetOneWagonDto } from "./dto/get-one-wagon.dto";
import { GetSeatsDto } from "./dto/get-seats.dto";
import { GetOneSeatDto } from "./dto/get-one-seat.dto";

@Injectable()
export class InfoService {
    constructor(private readonly requestService: RequestService) {
        this.getTrains({booking_available: true, start_point: 'Ростов-на-Дону', end_point: 'Москва'}).then(e=>console.log(e))
     }

    public getTrains = async (data: GetTrainsDto) => {
        const trains = await this.requestService.get({
            path: `/info/trains?booking_available=${data.booking_available}&start_point=${data.start_point}&end_point=${data.end_point}${data.stop_points ? `&stop_points=${data.stop_points}` : ''}`
        })
        return { trains }
    }

    public getOneTrain = async (data: GetOneTrainDto) => {
        const train = await this.requestService.get({
            path: `/info/train/${data.trainId}`
        })
        return { train }
    }

    public getWagons = async (data: GetWagonsDto) => {
        const wagons = await this.requestService.get({
            path: `/info/wagons?trainId=${data.trainId}`
        })
        return { wagons }
    }

    public getOneWagon = async (data: GetOneWagonDto) => {
        const wagon = await this.requestService.get({
            path: `/info/wagons/${data.wagonId}`
        })
        return { wagon }
    }

    public getSeats = async (data: GetSeatsDto) => {
        const seats = await this.requestService.get({
            path: `/info/seats?wagonId=${data.wagonId}`
        })
        return { seats }
    }

    public getOneSeat = async (data: GetOneSeatDto) => {
        const seat = await this.requestService.get({
            path: `/info/seats/${data.seatId}`
        })
        return { seat }
    }
}