import { CryptoPay } from "./src/CryptoPay"
import { ConfirmPayment } from "./src/methods/ConfirmPayment"
import { CreateInvoice } from "./src/methods/CreateInvoice"
import { GetBalance } from "./src/methods/GetBalance"
import { GetCurrencies } from "./src/methods/GetCurrencies"
import { GetExchangeRates } from "./src/methods/GetExchangeRates"
import { GetInvoices } from "./src/methods/GetInvoices"
import { GetMe } from "./src/methods/GetMe"
import { GetPayments } from "./src/methods/GetPayments"

async function main() {
    let api = new CryptoPay("https://testnet-pay.crypt.bot", "3214:CENSURED")

    let me = await api.send(new GetMe())

    console.log(`app id: ${me.appId}`)

    let balance = await api.send(new GetBalance())

    let availableAssets = balance.filter((b => { return parseInt(b.available) > 0 }))

    if (availableAssets.length) {
        console.log(`assets: ${availableAssets.map((a => { return `${a.currencyCode} -> ${a.available}` })).join(", ")}`)
    }

    let exchangeRates = await api.send(new GetExchangeRates())

    if (exchangeRates.length) {
        console.log(`exchange rate: ${exchangeRates.map((r => { return `${r.source} -> ${r.target}: ${r.rate}` })).join(", ")}`)
    }

    await api.send(new GetCurrencies());

    let newInvoice = await api.send(new CreateInvoice("TON", "1.0", "a", "openBot", "http://gooogle.com", "gue"))

    console.log(`new invoice, id: ${newInvoice.invoiceId}, url: ${newInvoice.payUrl}`)

    let invoices = await api.send(new GetInvoices(undefined, newInvoice.invoiceId.toString()))

    console.log(`new invoice id from get invoices: ${invoices[0].invoiceId}`)

    let payments = await api.send(new GetPayments())

    if (payments.length) {
        console.log(`payments: ${payments.map((p => { return `${p.invoiceId} -> ${p.status}` }))}`)
    }

    for (let payment of payments.filter((p => p.status === "paid"))) {
        console.log(`confirming invoice ${payment.invoiceId}`)
        let confirmedPayment = await api.send(new ConfirmPayment(payment.invoiceId))
        console.log(`confirmed invoice ${confirmedPayment.invoiceId}`)
    }
}

main().then().catch(console.error)
