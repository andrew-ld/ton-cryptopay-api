import { expect } from "chai";
import { ConfirmPayment } from "../../src/methods/ConfirmPayment"

describe('methods', function() {
    it('confirmPayment', function() {
        let obj = new ConfirmPayment(10)
        expect(obj.invoiceId).equal(10)
        expect(obj.getParams()).deep.equal({ invoice_id: 10 })
        expect(obj.getSource("https://test").toString()).equal("https://test/confirmPayment")
    })
})
