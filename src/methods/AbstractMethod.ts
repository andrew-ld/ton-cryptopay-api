/*
    Abstract definition of a api method.
*/
export abstract class AbstractMethod<T> { // T: represents the response type of the method
    /*
        Returns the url to which to make the request.
    */
    abstract getSource(baseUrl: string): URL

    /*
        Returns the parameters to be sent to the api.
    */
    abstract getParams(): Record<string, any>

    /*
        Parse the received response object into a typed one.
    */
    abstract deserializeResponse(unparsedResponse: Record<string, any>): T
}
