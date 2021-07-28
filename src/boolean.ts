import { TSchemaBoolean } from './type'

export const check = (b: boolean, schema: TSchemaBoolean) => {
    const { test } = schema
    if(typeof test === 'function' && !test(b)) {
        return false
    }
    return true
}