let arr = new Array(1000000).fill(1);

function print (v) { console.log(v) }
setTimeout(function () { console.log('end') }, 0)
let i = 0
let obj = {}

for (i; i < arr.length; i++) {
    obj[i] = true
}


console.time('destructuringarr')
arrClone =  [...arr]
console.timeEnd('destructuringarr')

console.time('assignarr')
arrClone =  Object.assign([], arr)
console.timeEnd('assignarr')

console.time('lodasclonearr')
arrClone = _.clone([], arr)
console.timeEnd('lodasclonearr')

console.time('jsonarr')
arrClone =  JSON.parse(JSON.stringify(arr))
console.timeEnd('jsonarr')

console.time('destructuring')
obj2 =  {...obj}
console.timeEnd('destructuring')

console.time('assign')
obj2 = Object.assign({}, obj)
console.timeEnd('assign')

console.time('lodashclone')
obj2 = _.clone(obj)
console.timeEnd('lodashclone')

console.time('json')
obj2 =  JSON.parse(JSON.stringify(obj))
console.timeEnd('json')

// deeply

let arr = new Array(1000000).fill(1);

function print (v) { console.log(v) }
let i = 0
let obj = {}
console.time('generation')
for (i; i < arr.length; i++) {
    obj[i] = { a: {a: true} }
}
console.timeEnd('generation')

console.time('lodashdeeplyclone')
clone = _.cloneDeep(obj)
console.timeEnd('lodashdeeplyclone')

console.time('json')
clone = JSON.parse(JSON.stringify(obj))
console.timeEnd('json')
