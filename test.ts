import check from './src'

console.log(check(20, 'number'))
console.log(check(20, { type: 'number' }))
console.log(check(20, { type: 'number', min: 10 }))
console.log(check(20, { type: 'number', min: 10, max: 12 }))
console.log(check(20, [{ type: 'number', min: 10, max: 12 }, { type: 'number', min: 10, max: 121 }]))

console.log(check([20, false, 'string'], 'array'))
console.log(check([20, false, 'string'], { type: 'array' }))
console.log(check([20, false, 'string'], { type: 'array', elements: 'number' }))
console.log(check([20, false, 'string'], { type: 'array', elements: ['number', 'string'] }))
console.log(check([20, false, 'string'], { type: 'array', elements: ['number', 'string', 'boolean'] }))

console.log(check({ a: 1, b: 'string' }, { type: 'object', properties: { a: 'number', b: ['number', 'string'] } }))
