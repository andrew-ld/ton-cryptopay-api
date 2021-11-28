import { expect } from "chai"
import { CryptoPay } from "../../src/index"

describe('crypto-pay', function() {
    it('cryptoPay', function() {
        let api = new CryptoPay("https://test", "test-token")
        expect(api.baseUrl).equal("https://test/apptest-token")
    })
})
