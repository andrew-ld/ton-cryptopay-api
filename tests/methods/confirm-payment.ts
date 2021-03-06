import { expect } from "chai";
import { ConfirmPayment } from "../../src/methods/ConfirmPayment"

describe('methods', function() {
    it('confirmPayment', function() {
        let obj = new ConfirmPayment(10)
        expect(obj.invoiceId).equal(10)
        expect(obj.getParams()).deep.equal({ invoiceId: 10 })
        expect(obj.getSource("https://test").toString()).equal("https://test/confirmPayment")


        let objFromOpts = ConfirmPayment.fromOpts({invoiceId: 10})
        expect(objFromOpts.invoiceId).equal(10)
        expect(objFromOpts).deep.equal(obj)
    })
})
