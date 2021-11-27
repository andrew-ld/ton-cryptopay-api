# TON - Crypto Pay API (https://t.me/CryptoBotEN/27)
`cryptopay-api` is an async and typed library to interact with TON Crypto Pay API

## Installing
``npm install @andrew-ld/cryptopay-api``


## Creating a client
```typescript
let endpoint = "https://testnet-pay.crypt.bot"
let token = "3214:CENSURED" // @CryptoTestnetBot

let client = new CryptoPay(endpoint, token)
```

### Doing stuff
```typescript
let me = client.send(new GetMe()) // typed result
console.log(`app id: ${me.appId}`)
```
