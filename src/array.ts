import { TSchemaArray } from './type'
import { multiCheck } from './tools'

export const check = (arr: any[], schema: TSchemaArray) => {
    const { test, elements } = schema
    if(typeof test === 'function' && !test(arr)) {
        return false
    }
    if(elements) {
        const result = arr.every(val => {
            const res = multiCheck(val, elements)
            return res
        })
        if(!result) {
            return false
        }
    }
    return true
}