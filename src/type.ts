export type TDataType = 'string' | 'number' | 'object' | 'array' | 'boolean' | 'unknown'

export type TSchemaBase<T extends TDataType, S> = {
    type: T
    defaultValue?: S
    test?: { (target: S): boolean }
}

export type TSchemaString = TSchemaBase<'string', string> & {
    test?: string | RegExp | { (target: string): boolean }
    minLength?: number
    maxLength?: number
}

export type TSchemaNumber = TSchemaBase<'number', number> & {
    min?: number
    max?: number
}

export type TSchemaBoolean = TSchemaBase<'boolean', boolean> & {
}

export type TSchemaObject = TSchemaBase<'object', any> & {
    properties?: { [key: string]: TMultiTypeExp | TMultiTypeExp[] }
}

export type TSchemaArray = TSchemaBase<'array', any[]> & {
    elements?: TMultiTypeExp | TMultiTypeExp[]
}

export type TSchema = TSchemaString | TSchemaNumber | TSchemaBoolean | TSchemaObject | TSchemaArray

export type TMultiTypeExp = TDataType | TSchema