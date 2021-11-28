import { CryptoPay } from "@andrew-ld/cryptopay-api";
import { GetExchangeRates } from "@andrew-ld/cryptopay-api/methods/ConfirmPayment"

async function main() {
    let api = new CryptoPay("https://testnet-pay.crypt.bot", "3214:CENSURED")

    let rates = await api.send(new GetExchangeRates())

    for (let rate of rates.filter((r => { return r.isValid }))) {
        console.log(`${rate.source} -> ${rate.target}: ${rate.rate}`)
    }
}

main().then().catch(console.error)
