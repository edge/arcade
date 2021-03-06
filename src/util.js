const exists = x => x != null
const isString = x => x.constructor === String
const isNumber = x => x.constructor === Number
const isBoolean = x => x.constructor === Boolean
const isArray = x => x.constructor === Array
const isObject = x => x.constructor === Object
const isContent = x => isString(x) || isNumber(x)

const own = (obj, k) => obj::Object.prototype.hasOwnProperty(k)

export {
	exists,
	isString,
	isNumber,
	isBoolean,
	isArray,
	isObject,
	isContent,
	own
}
