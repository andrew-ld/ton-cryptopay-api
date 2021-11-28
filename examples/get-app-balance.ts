import { CryptoPay } from "@andrew-ld/cryptopay-api";
import { GetBalance } from "@andrew-ld/cryptopay-api/methods/GetBalance"

async function main() {
    let api = new CryptoPay("https://testnet-pay.crypt.bot", "3214:CENSURED")

    let balance = await api.send(new GetBalance())

    for (let currency of balance) {
        console.log(`${currency.currencyCode}: ${currency.available}`)
    }
}

main().then().catch(console.error)
