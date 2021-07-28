import { TSchemaString } from './type'

const checkLength = (str: string, min: number, max: number) => {
    if(str.length < min) {
        return false
    }
    if(max > -1) {
        return str.length <= max
    }
    return true
}

const stringTest = (test: string | RegExp | { (s: string): boolean }, str: string) => {
    if(typeof test === 'string') {
        return test === str
    } else if(typeof test === 'function') {
        return test(str)
    } else {
        return test.test(str)
    }
}

export const check = (str: string, schema: TSchemaString) => {
    const { minLength = 0, maxLength = -1, test } = schema
    if(!checkLength(str, minLength, maxLength)) {
        return false
    }
    if(test && !stringTest(test, str)) {
        return false
    }
    return true
}