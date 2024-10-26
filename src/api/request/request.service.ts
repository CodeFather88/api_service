import { Injectable } from "@nestjs/common";
import https from 'https'
import fetch from 'node-fetch';
import { PropsApiRequestsGet, PropsApiRequestsMethod, PropsApiRequestsPost } from "./types";
import { Config } from "config";

@Injectable()
export class RequestService {
    private url: string;
    private headers: Record<string, string> = {};
    private agent: https.Agent;
    constructor(private readonly config: Config) {
        this.url = config.API_URL
        this.headers = {
            "Authorization": 'Bearer ' + config.AUTHORIZATION_TOKEN,
        }
    }
    private apiRequestsMethod = ({ url, path, body, method, headers = {}, isFile }: PropsApiRequestsMethod) => {
        let _body = JSON.parse(body?.toString() || "{}")
        this.headers["Content-Type"] = isFile ? "application/octet-stream" : "application/json"
        // console.log(`${url}${path}`)
        return fetch(`${url}${path}`, { body: method == "POST" ? JSON.stringify(_body) : undefined, method, headers: { ...headers, ...this.headers } }).then((e: any) => {
            if (isFile) {
                return e
            }
            return e.text()

        }).then((e: any) => {
            try {
                if (isFile) {
                    return e
                }
                const parse = JSON.parse(e)
                return parse
            } catch {
                throw Error(`${e}`)
            }
        })
            .catch((error) => {
                return {
                    error
                }
            })
    }
    public get = ({ path, headers, isFile, isHead }: PropsApiRequestsGet) => this.apiRequestsMethod({ url: this.url, path, method: "GET", headers, isFile, isHead })
    public post = ({ path, headers, body, isHead }: PropsApiRequestsPost) => this.apiRequestsMethod({ url: this.url, path, method: "POST", headers, body, isHead })
}

