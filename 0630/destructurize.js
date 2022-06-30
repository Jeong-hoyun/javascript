// 구조 분해 할당
// 비구조화 할당

const user ={
    name:'rodin',
    age:12,
    email:'rodin31@gmail.com'
}

const kagu =['desk','chair','bad','book']

const { name,age} =user
// const {name:nikname} 같은 방식으로 아이템명 변경도 가능

console.log(`name is ${name}`)
console.log(`age is ${age}`)
