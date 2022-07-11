// javascript 신문법


const user={
  name : 'kim'
 
};

const obj={
   data:{
    name:{
        id:123,
        data:234,
    }
   }

}


//console.log(user.age.value)
// 존재하지 않은 age 참조로 에러발생



console.log(user.age?.value)
// ?. 기능으로 에러 발생하지 않음


console.log(obj.data.name.id ?? '확인중')
// nullish coalescing 
//연산자 null이나 undefinded가 나오면 확인중이라고 표시됨




