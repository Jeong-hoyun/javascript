

import _ from 'lodash'

const users1 =[
    { userId: 1 , name:'nana'   },
    { userId: 2 , name:'ruda'   },
]

const users2 =[
    { userId: 1 , name:'dede'   },
    { userId: 3 , name:'adq'   },
]

const users3 =users1.concat(users2)
//console.log('concat',users3)
//console.log('uniqBy',_.uniqBy(users3,'userId'))

const users4 = _.unionBy(users1,users2,'userId')
//console.log('')

const car=[
{ id:1, name:'lexus'},
{ id:2, name:'santape'},
{ id:3, name:'sonata'},
{ id:4, name:'bmw'},
{ id:5, name:'model3'},
]

const foundcar = _.find(car, {name:'santape'})
const foundcarIndex = _.findIndex(car,{ name:'santape'})

console.log(foundcar.id)
console.log(foundcarIndex)