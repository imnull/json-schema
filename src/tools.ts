import { TDataType, TMultiTypeExp } from './type'
import { check as checkString } from './string'
import { check as checkNumber } from './number'
import { check as checkBoolean } from './boolean'
import { check as checkObject } from './object'
import { check as checkArray } from './array'

export const typeName = (v: any): TDataType => {
    if(typeof v === 'string') {
        return 'string'
    } else if(typeof v === 'number') {
        return 'number'
    } else if(typeof v === 'boolean') {
        return 'boolean'
    } else if(Array.isArray(v)) {
        return 'array'
    } else {
        const t = Object.prototype.toString.call(v).slice(8, -1).toLowerCase()
        if(t === 'object') {
            return 'object'
        } else {
            throw `Not implement type: ${t}`
        }
    }
}


export const multiCheck = (target: any, exp: TMultiTypeExp | TMultiTypeExp[]): boolean => {
    if(Array.isArray(exp)) {
        return exp.some(e => multiCheck(target, e))
    } else {
        const tname = typeName(target)
        if(typeof exp === 'string') {
            return exp === tname
        } else {
            const { type } = exp
            if(type !== tname) {
                return false
            }
            switch(exp.type) {
                case 'string': return checkString(target as string, exp)
                case 'number': return checkNumber(target as number, exp)
                case 'boolean': return checkBoolean(target as boolean, exp)
                case 'object': return checkObject(target, exp)
                case 'array': return checkArray(target, exp)
            }
        }
    }
}