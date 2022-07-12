const add =(a,b)=>a+b;
//변수일 경우에는 {} 없이 사용가능

function calculator(func,a,b){
    return func(a,b);
}


add(3,5) //8
calculator(add(),3,5);
//function의 호출을 보면 바로 리턴값을 생각하자
//add()=> undefined,undefined

const onClick=()=>{
    console.log('hello');
}

const onClick2=()=>()=>{
    console.log('hello');
}
// 함수 선언이 두개이상일때는 

