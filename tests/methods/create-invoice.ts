import { expect } from "chai";
import { CreateInvoice } from "../../src/index"

describe('methods', function() {
    it('createInvoice', function() {
        let obj = new CreateInvoice("test-asset", "1", "test-description", "test-paid-btn-name", "test-paid-btn-url", "test-payload")

        expect(obj.amount).equal("1")
        expect(obj.asset).equal("test-asset")

        expect(obj.getParams()).deep.equal(
            {
                amount: "1",
                asset: "test-asset",
                description: "test-description",
                paid_btn_name: "test-paid-btn-name",
                paid_btn_url: "test-paid-btn-url",
                payload: "test-payload"
            }
        )

        expect(obj.getSource("https://test").toString()).equal("https://test/createInvoice")
    })
})