import { AbstractMethod } from "./AbstractMethod"
import { Invoice } from "../types/Invoice"
import { recordToCamelCase } from "../utils"

/*
    Use this method to get paid and unconfirmed invoices of your app. 
    On success, the returns array of paid and unconfirmed invoices.
*/
export class GetPayments extends AbstractMethod<Invoice[]> {
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

    getSource(baseUrl: string): URL {
        return new URL(baseUrl + "/getPayments")
    }

    getParams(): Record<string, any> {
        return {
            offset: this.offset,
            count: this.count
        }
    }

    deserializeResponse(unparsedResponse: Record<string, any>) {
        let result: Invoice[] = []

        for (let invoice of unparsedResponse["result"]["items"]) {
            result.push(recordToCamelCase(invoice) as Invoice)
        }

        return result
    }
}

export default GetPayments
