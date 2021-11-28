import { SupportedCurrency } from "../types/SupportedCurrency";
import { recordToCamelCase } from "../utils";
import { AbstractMethod } from "./AbstractMethod";

export declare const GetCurrenciesOpts: {}

/*
    Use this method to supported currencies. 
    Returns array of currencies.
*/
export class GetCurrencies extends AbstractMethod<SupportedCurrency[], typeof GetCurrenciesOpts> {
    static fromOpts(_opts: typeof GetCurrenciesOpts): GetCurrencies {
        return new GetCurrencies()
    }

    getSource(baseUrl: string): URL {
        return new URL(baseUrl + "/getCurrencies")
    }

    getParams(): typeof GetCurrenciesOpts {
        return {}
    }

    deserializeResponse(unparsedResponse: Record<string, any>): SupportedCurrency[] {
        let result: SupportedCurrency[] = []

        for (let invoice of unparsedResponse["result"]) {
            result.push(recordToCamelCase(invoice) as SupportedCurrency)
        }

        return result
    }
}

export default GetCurrencies
