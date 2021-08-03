import { multiCheck } from './tools'
import traverse from 'json-schema-traverse'

const schema = {
    properties: {
        foo: { type: 'string' },
        // bar: { type: 'integer' },
        'a/b': {
            type: 'object',
            properties: {
                a: { type: 'integer' },
                'a/b/c': {
                    type: 'string'
                }
            }
        }
    }
}

traverse(schema, {
    cb: (schema, path, ...args) => {
        console.log(path)
    }
})

export default multiCheck