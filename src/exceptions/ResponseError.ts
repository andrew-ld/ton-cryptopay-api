/*
    The method you called returned an error.
*/
export class ResponseError extends Error {
    /*
        Error name.
    */
    name: string

    /*
        Error code.
    */
    code: number

    constructor(name: string, code: number) {
        super()
        this.name = name
        this.code = code
    }
}

export default ResponseError
