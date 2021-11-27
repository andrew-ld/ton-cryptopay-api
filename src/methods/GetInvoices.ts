import { AbstractMethod } from "./AbstractMethod"
import { Invoice } from "../types/Invoice"
import { recordToCamelCase } from "../utils"

/*
    Use this method to get invoices of your app.
    On success, the returns array of invoices.
*/
export class GetInvoices extends AbstractMethod<Invoice[]> {
    /*
        Optional. Currency code. 
        Supported assets: BTC, TON, ETH (only testnet), USDT, USDC, BUSD. 
        Default: all assets.
    */
    asset?: string

    /*
        Optional. Invoice IDs separated by comma. 
    */
    invoiceIds?: string

    /*
        Optional. Status of invoices.
        Available statusses: active or paid. 
        Default: all statusses.
    */
    status?: string

    /*
        Optional. Offset needed to return a specific subset of invoices. 
        Default: 0.
    */
    offset?: number

    /*
        Optional. Number of invoices to return. 
        Default: 100, Max: 1000.
    */
    count?: number

    constructor(asset?: string, invoiceIds?: string, status?: string, offset?: number, count?: number) {
        super()
        this.asset = asset
        this.invoiceIds = invoiceIds
        this.status = status
        this.offset = offset
        this.count = count
    }

    getSource(baseUrl: string): URL {
        return new URL(baseUrl + "/getInvoices")
    }

    getParams(): Record<string, any> {
        return {
            asset: this.asset,
            invoice_ids: this.invoiceIds,
            status: this.status,
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
