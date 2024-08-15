
export const FIRST_CODE = `function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
    const value: T = parseModel(chunk._response, chunk._value);
    const initializedChunk: InitializedChunk<T> = (chunk: any);
    initializedChunk._status = INITIALIZED;
    initializedChunk._value = value;
    return value;
}
`;

export const SECOND_CODE = `export function parseModelTuple(
    response: Response,
    value: {+[key: string]: JSONValue} | $ReadOnlyArray<JSONValue>,
): any {
    const tuple: [mixed, mixed, mixed, mixed] = (value: any);
`;