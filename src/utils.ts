import { ResponseError } from "./exceptions/ResponseError"
import _ from "lodash"

export function validateResponse(unparsedResponse: Record<string, any>) {
    if (unparsedResponse["ok"] !== true) {
        let name = unparsedResponse["error"]["name"]
        let code = unparsedResponse["error"]["code"]
        throw new ResponseError(name, code)
    }
}

export function recordToCamelCase(record: Record<string, any>): Record<string, any> {
    var result = {}

    for (let [k, v] of Object.entries(record)) {
        // @ts-ignore
        result[_.camelCase(k)] = v
    }

    return result
}

export function isNullOrUndefined(x: any) {
    return (x === null) || (x === undefined)
}
