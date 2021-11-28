import { AbstractMethod } from "./AbstractMethod"
import { recordToCamelCase } from "../utils"
import { Me } from "../types/Me"

/*
    A simple method for testing your app's authentication token
*/
export class GetMe extends AbstractMethod<Me> {
    getSource(baseUrl: string): URL {
        return new URL(baseUrl + "/getMe")
    }

    getParams(): Record<string, any> {
        return {}
    }

    deserializeResponse(unparsedResponse: Record<string, any>) {
        return recordToCamelCase(unparsedResponse["result"]) as Me
    }
}

export default GetMe
