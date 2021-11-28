import { expect } from "chai";
import { GetBalance } from "../../src/methods/GetBalance"

describe('methods', function() {
    it('getBalance', function() {
        let obj = new GetBalance()
        expect(obj.getParams()).deep.equal({})
        expect(obj.getSource("https://test").toString()).equal("https://test/getBalance")
    })
})
