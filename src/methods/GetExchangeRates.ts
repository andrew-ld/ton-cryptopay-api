import { Currency } from "../types/Currency"
import { recordToCamelCase } from "../utils"
import { AbstractMethod } from "./AbstractMethod"

export declare const GetExchangeRatesOpts: {}

/*
    Use this method to get exchange rates of supported currencies. 
    Returns array of currencies.
*/
export class GetExchangeRates extends AbstractMethod<Currency[], typeof GetExchangeRatesOpts> {
    static fromOpts(_opts: typeof GetExchangeRatesOpts): GetExchangeRates {
        return new GetExchangeRates()
    }

    getSource(baseUrl: string): URL {
        return new URL(baseUrl + "/getExchangeRates")
    }

    getParams(): typeof GetExchangeRatesOpts {
        return {}
    }

    deserializeResponse(unparsedResponse: Record<string, any>): Currency[] {
        let result: Currency[] = []

        for (let invoice of unparsedResponse["result"]) {
            result.push(recordToCamelCase(invoice) as Currency)
        }

        return result
    }
}


export default GetExchangeRates
