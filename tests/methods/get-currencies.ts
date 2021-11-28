import { expect } from "chai";
import { GetCurrencies } from "../../src/methods/GetCurrencies"

describe('methods', function() {
    it('getCurrencies', function() {
        let obj = new GetCurrencies()
        expect(obj.getParams()).deep.equal({})
        expect(obj.getSource("https://test").toString()).equal("https://test/getCurrencies")
    })
})
