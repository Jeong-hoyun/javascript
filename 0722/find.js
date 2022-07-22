const original=[{a:1},{a:5},{a:2},{a:3}];

const findFunction= item=>{
  if(item.a===5){
    return true
  }
}

const a=original.find(findFunction);
//console.log(a)


  // 콜백함수의 정의 연습문제 find 사용법
  const arr=[
    {
    name:'kim',
    age:10,
    },{
    name:'choi',
    age:13,
    },{
    name:'jin',
    age:20,
    },{
    name:'woo',
    age:50,
    },{
    name:'woo',
    age:20,
    },{
    name:'woo',
    age:30,   
 }]

function finds(target){    
    const result =arr.find(
    (i)=>i.name===target.toLowerCase().trim());
}

function findAge(name){    
    const  Name= name.toLowerCase().trim()
  
  const foundAge =arr.filter((item)=>{
    if(Name===item.name){
        return true
    }
  }).map(({age})=>age)
  .sort((a,b)=>b-a)

}

   





console.log(findAge('Woo  '))