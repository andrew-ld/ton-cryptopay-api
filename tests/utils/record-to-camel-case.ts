import { expect } from "chai";
import { recordToCamelCase } from "../../src/utils"

describe('utils', function() {
    it('recordToCamelCase', function() {
        expect(recordToCamelCase({ x_y: 1 })).deep.equal({ xY: 1 })
        expect(recordToCamelCase({ xY: 1 })).deep.equal({ xY: 1 })
        expect(recordToCamelCase({ XXX_yyyy_XXX: 1 })).deep.equal({ xxxYyyyXxx: 1 })
        expect(recordToCamelCase({ XXXX: 1 })).deep.equal({ xxxx: 1 })
    })
})
