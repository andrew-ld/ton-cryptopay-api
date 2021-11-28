/*
    Abstract definition of an api method.
*/
export abstract class AbstractMethod<Result, Params> {
    /*
        Returns the url to send the request to the api.
    */
    abstract getSource(baseUrl: string): URL

    /*
        Returns the parameters to send to the api.
    */
    abstract getParams(): Params

    /*
        Parses the received response object into a typed one.
    */
    abstract deserializeResponse(unparsedResponse: Record<string, any>): Result
}

export default AbstractMethod
