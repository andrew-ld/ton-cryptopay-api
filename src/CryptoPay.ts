import axios, { AxiosResponse } from "axios"
import _ from "lodash"
import { AbstractMethod } from "./methods/AbstractMethod"
import { isNullOrUndefined, validateResponse } from "./utils"

export class CryptoPay {
    baseUrl: string

    constructor(baseUrl: string, token: string) {
        this.baseUrl = `${baseUrl}/app${token}`
    }

    /*
        Call a method of ton cryptopay api.
        Returns T if the request was successful.
        Raises ResponseError if you have entered an incorrect parameter.
    */
    async send<T>(request: AbstractMethod<T>): Promise<T> {
        let url = request.getSource(this.baseUrl).toString()
        let params = new URLSearchParams(_.omitBy(request.getParams(), isNullOrUndefined))

        let response: AxiosResponse

        try {
            response = await axios.post(url, params)
        } catch (err: any) {
            let body = err.response?.data

            if (body) {
                validateResponse(body)
            }

            throw err
        }

        let body = response.data
        validateResponse(body)

        return request.deserializeResponse(body)
    }
}

export default CryptoPay
