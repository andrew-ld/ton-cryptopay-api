import { expect } from "chai";
import { recordToSnakeCase } from "../../src/utils"

describe('utils', function() {
    it('recordToSnakeCase', function() {
        expect(recordToSnakeCase({aaBbCc: 1})).deep.equal({aa_bb_cc: 1})
        expect(recordToSnakeCase({aa_bb_cc: 1})).deep.equal({aa_bb_cc: 1})
    })
})
