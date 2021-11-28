import { AbstractMethod } from "./AbstractMethod"
import { Invoice } from "../types/Invoice"
import { recordToCamelCase } from "../utils"

export declare const GetPaymentsOpts: {
    offset?: number
    count?: number
}

/*
    Use this method to get paid and unconfirmed invoices of your app. 
    On success, the returns array of paid and unconfirmed invoices.
*/
export class GetPayments extends AbstractMethod<Invoice[], typeof GetPaymentsOpts> {
    /*
        Optional. Offset needed to return a specific subset of  invoices. 
        Default: 0.
    */
    offset?: number

    /*
        Optional. Number of invoices to return. 
        Default: 100, max: 1000.
    */
    count?: number

    constructor(offset?: number, count?: number) {
        super()
        this.offset = offset
        this.count = count
    }

    static fromOpts(opts: typeof GetPaymentsOpts): GetPayments {
        return new GetPayments(
            opts.offset,
            opts.count
        )
    }

    getSource(baseUrl: string): URL {
        return new URL(baseUrl + "/getPayments")
    }

    getParams(): typeof GetPaymentsOpts {
        return {
            offset: this.offset,
            count: this.count
        }
    }

    deserializeResponse(unparsedResponse: Record<string, any>): Invoice[] {
        let result: Invoice[] = []

        for (let invoice of unparsedResponse["result"]["items"]) {
            result.push(recordToCamelCase(invoice) as Invoice)
        }

        return result
    }
}

export default GetPayments
