import { AbstractMethod } from "./AbstractMethod"
import { Asset } from "../types/Asset"
import { recordToCamelCase } from "../utils"

export declare const GetBalanceOpts: {}

/*
    Use this method to get balance of your app. 
    Returns array of assets.
*/
export class GetBalance extends AbstractMethod<Asset[]> {
    static fromOpts(_opts: typeof GetBalanceOpts): GetBalance {
        return new GetBalance()
    }

    getSource(baseUrl: string): URL {
        return new URL(baseUrl + "/getBalance")
    }

    getParams(): Record<string, any> {
        return {}
    }

    deserializeResponse(unparsedResponse: Record<string, any>) {
        let result: Asset[] = []

        for (let invoice of unparsedResponse["result"]) {
            result.push(recordToCamelCase(invoice) as Asset)
        }

        return result
    }
}

export default GetBalance
