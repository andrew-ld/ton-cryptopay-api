import { AbstractMethod } from "./AbstractMethod"
import { Invoice } from "../types/Invoice"
import { recordToCamelCase } from "../utils"

export declare const ConfirmPaymentOpts: {
    invoiceId: number
}

/*
    Use this method to confirm paid invoice of your app. 
    On success, the return confirmed invoice.
*/
export class ConfirmPayment extends AbstractMethod<Invoice> {
    /*
        Invoice ID you want to confirm.
    */
    invoiceId: number

    constructor(invoiceId: number) {
        super()
        this.invoiceId = invoiceId
    }

    static fromOpts(opts: typeof ConfirmPaymentOpts): ConfirmPayment {
        return new ConfirmPayment(opts.invoiceId)
    }

    getSource(baseUrl: string): URL {
        return new URL(baseUrl + "/confirmPayment")
    }

    getParams(): Record<string, any> {
        return {
            invoice_id: this.invoiceId
        }
    }

    deserializeResponse(unparsedResponse: Record<string, any>) {
        return recordToCamelCase(unparsedResponse["result"]) as Invoice
    }
}

export default ConfirmPayment
