import { TSchemaObject } from './type'
import { multiCheck } from './tools'

export const check = (obj: any, schema: TSchemaObject) => {
    const { test, properties } = schema
    if(typeof test === 'function' && !test(obj)) {
        return false
    }
    if(properties) {
        const result = Object.keys(properties).every(key => {
            const exp = properties[key]
            const val = obj[key]
            const res = multiCheck(val, exp)
            return res
        })
        if(!result) {
            return false
        }
    }
    return true
}