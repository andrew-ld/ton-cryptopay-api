import { SupportedCurrency } from "../types/SupportedCurrency";
import { recordToCamelCase } from "../utils";
import { AbstractMethod } from "./AbstractMethod";

/*
    Use this method to supported currencies. 
    Returns array of currencies.
*/
export class GetCurrencies extends AbstractMethod<SupportedCurrency[]> {
    getSource(baseUrl: string): URL {
        return new URL(baseUrl + "/getCurrencies")
    }

    getParams(): Record<string, any> {
        return {}
    }

    deserializeResponse(unparsedResponse: Record<string, any>) {
        let result: SupportedCurrency[] = []

        for (let invoice of unparsedResponse["result"]) {
            result.push(recordToCamelCase(invoice) as SupportedCurrency)
        }

        return result
    }
}
