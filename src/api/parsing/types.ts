export enum RedisKeysEnum {
    users = 'users'
}

export type IUser = {
    paths: {
        from: string
        to: string
    }
    orders: {

    }[]
}