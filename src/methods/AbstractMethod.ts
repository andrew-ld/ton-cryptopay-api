export abstract class AbstractMethod<T> {
    abstract getSource(baseUrl: string): URL

    abstract getParams(): Record<string, any>

    abstract deserializeResponse(unparsedResponse: Record<string, any>): T
}
