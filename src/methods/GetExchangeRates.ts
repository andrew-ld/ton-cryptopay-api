import { Currency } from "../types/Currency"
import { recordToCamelCase } from "../utils"
import { AbstractMethod } from "./AbstractMethod"

/*
    Use this method to get exchange rates of supported currencies. 
    Returns array of currencies.
*/
export class GetExchangeRates extends AbstractMethod<Currency[]> {
    getSource(baseUrl: string): URL {
        return new URL(baseUrl + "/getExchangeRates")
    }

    getParams(): Record<string, any> {
        return {}
    }

    deserializeResponse(unparsedResponse: Record<string, any>) {
        let result: Currency[] = []

        for (let invoice of unparsedResponse["result"]) {
            result.push(recordToCamelCase(invoice) as Currency)
        }

        return result
    }
}


export default GetExchangeRates
