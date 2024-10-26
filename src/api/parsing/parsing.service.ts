import { Injectable } from "@nestjs/common";
import { RedisService } from "src/redis/redis.service";
import { InfoService } from "../info/info.service";

@Injectable()
export class ParsingService {
    private trainsPool: { trainId: number, seconds: number }[]
    private wagonsPool: { wagonId: number, seconds: number }[]
    constructor(
        private readonly infoService: InfoService,
        private readonly redisService: RedisService
    ) { }

    private parseData = async () => {
        
    }
}