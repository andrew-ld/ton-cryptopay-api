import { CryptoPay } from "@andrew-ld/cryptopay-api";
import { GetCurrencies } from "@andrew-ld/cryptopay-api/methods/GetCurrencies"

async function main() {
    let api = new CryptoPay("https://testnet-pay.crypt.bot", "3214:CENSURED")

    let currencies = await api.send(new GetCurrencies())

    for (let currency of currencies) {
        console.log(`name: ${currency.name}, code: ${currency.code}, decimals: ${currency.decimals}`)
    }
}

main().then().catch(console.error)
