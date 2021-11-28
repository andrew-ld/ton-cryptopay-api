import { expect } from "chai";
import { CreateInvoice } from "../../src/methods/CreateInvoice"

describe('methods', function() {
    it('createInvoice', function() {
        let obj = new CreateInvoice("test-asset", "1", "test-description", "test-paid-btn-name", "test-paid-btn-url", "test-payload", false, true)

        expect(obj.amount).equal("1")
        expect(obj.asset).equal("test-asset")

        expect(obj.getParams()).deep.equal(
            {
                amount: "1",
                asset: "test-asset",
                description: "test-description",
                paidBtnName: "test-paid-btn-name",
                paidBtnUrl: "test-paid-btn-url",
                payload: "test-payload",
                allowComments: false,
                allowAnonymous: true
            }
        )

        expect(obj.getSource("https://test").toString()).equal("https://test/createInvoice")

        let objFromOpts = CreateInvoice.fromOpts({asset: "TON", amount: "30", allowAnonymous: true})

        expect(objFromOpts.asset).equal("TON")
        expect(objFromOpts.amount).equal("30")
        expect(objFromOpts.description).equal(undefined)
        expect(objFromOpts.allowAnonymous).equal(true)
    })
})
