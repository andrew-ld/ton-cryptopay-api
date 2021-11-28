import { AbstractMethod } from "./AbstractMethod"
import { recordToCamelCase } from "../utils"
import { Me } from "../types/Me"

export declare const GetMeOpts: {}

/*
    A simple method for testing your app's authentication token
*/
export class GetMe extends AbstractMethod<Me, typeof GetMeOpts> {
    static fromOpts(_opts: typeof GetMeOpts): GetMe {
        return new GetMe()
    }

    getSource(baseUrl: string): URL {
        return new URL(baseUrl + "/getMe")
    }

    getParams(): typeof GetMeOpts {
        return {}
    }

    deserializeResponse(unparsedResponse: Record<string, any>): Me {
        return recordToCamelCase(unparsedResponse["result"]) as Me
    }
}

export default GetMe
