import { Injectable } from "@nestjs/common";
import { RedisService } from "src/redis/redis.service";
import { InfoService } from "../info/info.service";
import { RedisKeysEnum } from "./types";

@Injectable()
export class ParsingService {
    constructor(
        private readonly infoService: InfoService,
        private readonly redisService: RedisService
    ) { }

    // private parseData = async () => {
    //     const users = await this.redisService.client.get(RedisKeysEnum.users)
    //     for (let user of users) {
    //         const trains = await this.infoService.getTrains({
    //             // booking_available: user.,
    //             // start_point,
    //             // end_point
    //         })

    //         const wagonsPromise = this.infoService.getWagons({ trainId })
    //     }
    // }
}