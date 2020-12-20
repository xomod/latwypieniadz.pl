export const isLoaded = (request: any) => {
    return request !== null && request.status !== 102
}

const arrayToStringList = (arr: string[]) =>
    arr.toString().replace(/,/g, ", ")


// TODO: Support arrays.
export const checkType = (name: string, value: any, ...types: string[]) => {

    if (!types.includes(typeof value)) throw new Error(`Expected ${arrayToStringList(types)} for ${name}, got ${typeof value}`);
}