import { Agent } from "https";

export type PropsApiRequestsMethod = {
    url: string,
    path: string,
    body?: BodyInit;
    method?: "GET" | "POST",
    headers?: Record<string, string>,
    isFile?: boolean
    isHead?: boolean
}

export type PropsApiRequests = {
    config: IConfigAxTrain,
}
export type PropsApiRequestsGet = {
    path: string;
    headers?: Record<string, string>
    isFile?: boolean
    isHead?: boolean
}
export type PropsApiRequestsPost = {
    path: string;
    headers?: Record<string, string>
    body?: any;
    isHead?: boolean
}
export type IConfigAxTrain = {
    AUTHORIZATION_TOKEN: string
    API_URL: string,
    agent: Agent
}