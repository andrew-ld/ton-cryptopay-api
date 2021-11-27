export interface SupportedCurrency {
    isBlockchain: boolean
    isStablecoin: boolean
    isFiat: boolean
    name: string
    code: string
    url: string
    decimals: number
}
