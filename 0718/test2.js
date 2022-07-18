  // 콜백함수의 정의 연습문제 find 사용법
  const arr=[
    {
    name:'kim',
    age:10,
    },{
    name:'park',
    age:15,
    },{
    name:'lee',
    age:12,
    },{
    name:'choi',
    age:13,
    },{
    name:'jin',
    age:20,
    },{
    name:'woo',
    age:30,   
 }]

 const findAge=(name)=>{
    const getLow=name.toLowerCase().trim();
    const user= arr.find(item=>item.name===getLow);
    return user.age;
 }

console.log(findAge('choi  '))