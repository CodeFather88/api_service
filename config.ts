import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class Config {
    AUTHORIZATION_TOKEN: string;
    PORT: number;
    API_URL: string
    REDIS_URL: string
    constructor(private readonly configService: ConfigService) {
        this.AUTHORIZATION_TOKEN = this.configService.get<string>('AUTHORIZATION_TOKEN');
        this.API_URL = this.configService.get<string>('API_URL');
        this.PORT = this.configService.get<number>('PORT');
        this.REDIS_URL = this.configService.get<string>('REDIS_URL')
    }

}