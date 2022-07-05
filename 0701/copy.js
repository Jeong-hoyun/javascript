//1.얕은 복수(shallow copy)
//2. 깊은 복사(Deep copy)

import _ from 'lodash'

const user ={
    name:'rina',
    age:21,
    emails:[' thesecon@gmail.com']
}

const Deepcopy=_.cloneDeep(user)

console.log(Deepcopy===user)


const copyUser=Object.assign({},user)
console.log(copyUser===user)


user.age=22
console.log('user',user)
console.log('copyuser',copyUser)

