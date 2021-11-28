export interface Invoice {
    invoiceId: number
    status: string
    hash: string
    asset: string
    amount: string
    payUrl: string
    description: string
    createdAt: Date
    payload: string
    paidBtnName: string
    paidBtnUrl: string
    isConfirmed: boolean
}

export default Invoice
