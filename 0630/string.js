// string.prototype.indexOf()

const para= 'today world topic BBC '
const mail= 'name@gmail.com'


const index1=para.indexOf('topic')
const index2=para.slice(5,10)
const index3=para.replace('BBC','KBS')
const indexm=mail.match('/.+(?=@)/)',[0])


console.log(indexm)

// console.log(index1!==-1)
// console.log(index1)
// console.log(index2)
// console.log(index3)
//값이 없으면 -1

