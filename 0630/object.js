const userAge={
    name:'nora',
    age:31
}

const userEmail={
    name:'nora',
    email :'nora121@gmail.com'
}

const target=Object.assign(userAge,userEmail)


const userdata={
    name:'marin',
    age:21,
    email:'marin231@gmail.com'
}

const keys =Object.keys(userdata)
console.log(keys)

console.log(userdata['age'])
//괄호없이 화살표 함수 사용시 바깥에 있는 데이터를 콜백
const values =keys.map(key=>userdata[key])
console.log(values)







