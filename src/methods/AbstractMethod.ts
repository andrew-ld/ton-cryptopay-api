/*
    Abstract definition of an api method.
*/
export abstract class AbstractMethod<T> { // T: represents the response type of the method
    /*
        Returns the url to send the request to the api.
    */
    abstract getSource(baseUrl: string): URL

    /*
        Returns the parameters to send to the api.
    */
    abstract getParams(): Record<string, any>

    /*
        Parses the received response object into a typed one.
    */
    abstract deserializeResponse(unparsedResponse: Record<string, any>): T
}

export default AbstractMethod
