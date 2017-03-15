import {add} from './math'
import {area} from './math'

console.log('hello, node')

console.log(' 3 + 5 = ' + add(3,5))
console.log('area = ' + area(3))

const props = {
  width: 100,
  height: 200,
  type: 'text',
  radius: 10,
}

const {width, height} = props
console.log(width)
console.log(height)

const { width: w, height: h} = props
console.log(width)
console.log(height)
