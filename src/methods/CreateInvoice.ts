import { AbstractMethod } from "./AbstractMethod"
import { Invoice } from "../types/Invoice"
import { recordToCamelCase } from "../utils"

/*
    Use this method to create a new invoice. 
    Returns object of created invoice.
*/
export class CreateInvoice extends AbstractMethod<Invoice> {
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

    constructor(asset: string, amount: string, description?: string, paidBtnName?: string, paidBtnUrl?: string, payload?: string) {
        super()
        this.asset = asset
        this.amount = amount
        this.description = description
        this.paidBtnName = paidBtnName
        this.paidBtnUrl = paidBtnUrl
        this.payload = payload
    }

    getSource(baseUrl: string): URL {
        return new URL(baseUrl + "/createInvoice")
    }

    getParams(): Record<string, any> {
        return {
            asset: this.asset,
            amount: this.amount,
            description: this.description,
            paid_btn_name: this.paidBtnName,
            paid_btn_url: this.paidBtnUrl,
            payload: this.payload
        }
    }

    deserializeResponse(unparsedResponse: Record<string, any>) {
        return recordToCamelCase(unparsedResponse["result"]) as Invoice
    }
}
