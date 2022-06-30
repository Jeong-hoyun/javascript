// function User(first, last) {
//     this.firstName = first
//     this.lastName = last
// }

// User.prototype.getFullName = function () {
//     return   `${this.firstName} ${this.lastName} `
// }

//ES6 classes

class User{
    constructor(first,last){
        this.firstName=first
        this.lastName=last
    }
    getFullName(){
        return   `${this.firstName} ${this.lastName} `
    }
}


const names=new User('mina','kim')
const amy =new User('Amy','Clarke')
const neo =new User('Neo','Smith')

console.log(names)
console.log(amy.getFullName())
console.log(neo.getFullName())


