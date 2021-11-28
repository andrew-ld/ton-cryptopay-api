import { expect } from "chai";
import { isNullOrUndefined } from "../../src/utils"

describe('utils', function() {
    it('isNullOrUndefined', function() {
        expect(isNullOrUndefined(null)).equal(true)
        expect(isNullOrUndefined(undefined)).equal(true)
        expect(isNullOrUndefined("")).equal(false)
        expect(isNullOrUndefined("null")).equal(false)
        expect(isNullOrUndefined("undefined")).equal(false)
        expect(isNullOrUndefined({})).equal(false)
        expect(isNullOrUndefined([])).equal(false)
    })
})
