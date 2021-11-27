export class ResponseError extends Error {
    name: string
    code: number

    constructor(name: string, code: number) {
        super()
        this.name = name
        this.code = code
    }
}
