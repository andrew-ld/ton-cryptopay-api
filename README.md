# TON - Crypto Pay API - Getting started

## Get an api key 
- Write to https://t.me/CryptoTestnetBot (telegram)
- Select Crypto Pay
- Select Create App
- Select API Token

![Screenshot_20211127_190035](https://user-images.githubusercontent.com/43882924/143691867-9a88c3a4-717a-4695-a7ee-6233fc7c8d51.png)

## Install the library
- run `npm install @andrew-ld/cryptopay-api`

## Instantiate a new client
```typescript
import { CryptoPay } from "@andrew-ld/cryptopay-api";

let endpoint = "https://testnet-pay.crypt.bot"
let token = "3214:CENSURED" // @CryptoTestnetBot

let client = new CryptoPay(endpoint, token)
```

## Call a method
```typescript
import { GetMe } from "@andrew-ld/cryptopay-api/methods/GetMe";

let result = await client.send(new GetMe())
console.log(result)
```

## List of the available methods
`ConfirmPayment`: Confirm paid invoice of your app. 

`CreateInvoice`: Create a new invoice.

`GetBalance`: Get balance of your app. 

`GetCurrencies`: Get list of supported currencies.

`GetExchangeRates`: Get exchange rates of supported currencies. 

`GetInvoices`: Get invoices of your app.

`GetMe`: For testing your app's authentication token.

`GetPayments`: Get paid and unconfirmed invoices of your app. 


## Advanced examples
https://github.com/andrew-ld/ton-cryptopay-api/tree/master/examples