import { expect } from "chai";
import { validateResponse } from "../../src/utils"

describe('utils', function() {
    it('validateResponse', function() {
        expect(function() {
            validateResponse({ ok: false, error: { name: "test", code: 0 } })
        }).to.throw()

        expect(function() {
            validateResponse({ ok: true })
        })
    })
})
