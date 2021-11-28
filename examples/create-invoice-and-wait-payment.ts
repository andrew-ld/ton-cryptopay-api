import { CryptoPay } from "@andrew-ld/cryptopay-api";
import { GetInvoices } from "@andrew-ld/cryptopay-api/methods/GetInvoices"
import { ConfirmPayment } from "@andrew-ld/cryptopay-api/methods/ConfirmPayment"
import { CreateInvoice } from "@andrew-ld/cryptopay-api/methods/CreateInvoice"

async function delay(ms: number) {
    await new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    let api = new CryptoPay("https://testnet-pay.crypt.bot", "3214:CENSURED")

    let invoice = await api.send(new CreateInvoice("TON", "0.1"))
    console.log(`payment link: ${invoice.payUrl}`)

    while (true) {
        await delay(1000)

        let invoices = await api.send(GetInvoices.fromOpts({invoiceIds: invoice.invoiceId.toString()}))

        if (!invoices.length) {
            continue
        }

        let status = invoices[0].status

        if (status === "paid") {
            break
        }

        console.log(`wait status change, current: ${status}`)
    }

    await api.send(new ConfirmPayment(invoice.invoiceId))
    console.log("done")
}

main().then().catch(console.error)
