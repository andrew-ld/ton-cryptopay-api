import { AbstractMethod } from "./AbstractMethod"
import { Invoice } from "../types/Invoice"
import { recordToCamelCase } from "../utils"

export declare const CreateInvoiceOpts: {
    asset: string
    amount: string
    description?: string
    paidBtnName?: string
    paidBtnUrl?: string
    payload?: string
    allowComments?: boolean
    allowAnonymous?: boolean
}

/*
    Use this method to create a new invoice. 
    Returns object of created invoice.
*/
export class CreateInvoice extends AbstractMethod<Invoice, typeof CreateInvoiceOpts> {
    /*
        Currency code. Supported assets: BTC, TON, ETH (only testnet), USDT, USDC, BUSD.
    */
    asset: string

    /*
        Amount of the invoice in float. 
        For example: 125.50
    */
    amount: string

    /*
        Optional. Description of the invoice. Up to 1024 symbols.
    */
    description?: string

    /*
        Optional. Paid button name. This button will be shown when your invoice was paid.
        
        Supported names: 
            - viewItem - View Item
            - openChannel - Open Channel
            - openBot - Open Bot
            - callback - Return
    */
    paidBtnName?: string

    /*
        Optional but requried when you use paid_btn_name. Paid button URL. 
        You can set any payment success link (for example link on your bot). 
        Start with https or http.
    */
    paidBtnUrl?: string

    /*
        Optional. Some data. User ID, payment id, or any data you want to attach to the invoice.
     */
    payload?: string

    /*
        Optional. Allow adding comments when paying an invoice. Default is true.
    */
    allowComments?: boolean

    /*
        Optional. Allow pay invoice as anonymous. Default is true.
    */
    allowAnonymous?: boolean

    constructor(
        asset: string,
        amount: string,
        description?: string,
        paidBtnName?: string,
        paidBtnUrl?: string,
        payload?: string,
        allowComments?: boolean,
        allowAnonymous?: boolean
    ) {
        super()
        this.asset = asset
        this.amount = amount
        this.description = description
        this.paidBtnName = paidBtnName
        this.paidBtnUrl = paidBtnUrl
        this.payload = payload
        this.allowComments = allowComments
        this.allowAnonymous = allowAnonymous
    }

    static fromOpts(opts: typeof CreateInvoiceOpts): CreateInvoice {
        return new CreateInvoice(
            opts.asset,
            opts.amount,
            opts.description,
            opts.paidBtnName,
            opts.paidBtnUrl,
            opts.payload,
            opts.allowComments,
            opts.allowAnonymous
        )
    }

    getSource(baseUrl: string): URL {
        return new URL(baseUrl + "/createInvoice")
    }

    getParams(): typeof CreateInvoiceOpts {
        return {
            asset: this.asset,
            amount: this.amount,
            description: this.description,
            paidBtnName: this.paidBtnName,
            paidBtnUrl: this.paidBtnUrl,
            payload: this.payload,
            allowComments: this.allowComments,
            allowAnonymous: this.allowAnonymous
        }
    }

    deserializeResponse(unparsedResponse: Record<string, any>): Invoice {
        return recordToCamelCase(unparsedResponse["result"]) as Invoice
    }
}

export default CreateInvoice
