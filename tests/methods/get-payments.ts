import { expect } from "chai";
import { GetPayments } from "../../src/methods/GetPayments"

describe('methods', function() {
    it('getPayments', function() {
        let obj = new GetPayments(10, 20)
        expect(obj.offset).equal(10)
        expect(obj.count).equal(20)
        expect(obj.getParams()).deep.equal({ offset: 10, count: 20 })
        expect(obj.getSource("https://test").toString()).equal("https://test/getPayments")
    })
})
