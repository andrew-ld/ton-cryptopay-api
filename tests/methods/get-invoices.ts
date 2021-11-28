import { expect } from "chai";
import { GetInvoices } from "../../src/methods/GetInvoices"

describe('methods', function() {
    it('getInvoices', function() {
        let obj = new GetInvoices()
        expect(obj.getSource("https://test").toString()).equal("https://test/getInvoices")
    })
})
