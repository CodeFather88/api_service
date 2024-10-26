import { Injectable } from '@nestjs/common';
import { Config } from 'config';
import { RedisClientType, createClient } from 'redis';

@Injectable()
export class RedisService {
	client: RedisClientType;
	private url: string;

    constructor(private readonly config: Config) {
		this.url = config.REDIS_URL
		this.client = createClient({
			url: this.url,
            name: 'test',
            
		});

		this.client.connect().catch(console.error);
        this.test().then(e=>console.log(1))
	}

	test = async () => {
		await this.client.set('key', 'value');
		const value = await this.client.get('key2');
		console.log(value);
	};
}