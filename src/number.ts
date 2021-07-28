import { TSchemaNumber } from './type'

const isValidNumber = (v: any): v is number => {
    return typeof v === 'number' && !isNaN(v)
}

const checkRange = (n: number, min: number | undefined, max: number | undefined) => {
    if(isValidNumber(min) && n < min) {
        return false
    }
    if(isValidNumber(max) && n > max) {
        return false
    }
    return true
}

export const check = (n: number, schema: TSchemaNumber) => {
    if(isNaN(n)) {
        return false
    }
    const { min, max, test } = schema
    if(!checkRange(n, min, max)) {
        return false
    }
    if(typeof test === 'function' && !test(n)) {
        return false
    }
    return true
}