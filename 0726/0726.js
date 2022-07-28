const a= new Number(1);

console.log(a)
//[Number:1]로 자동랩핑


const arr=[1,2,3]
console.log(arr.map((a)=>a))
//자료형 배열

const arr2=[1,2,3,3]
console.log(arr2.filter((e)=>e))
//자료형 배열


console.log(arr2.map((e)=>e)
    .filter((e)=>e)
    .fill(3)
    .every(a=>a===3)
    )
//true every와 비교

const arr3={
    a:{
        b:{
            c:1,
        }
    }
 
}

console.log(arr3.a.b.c)
// 1반환
console.log(arr3?.a.b.c)
// 1반환

const testRandom=()=>{
    const obj={};
    if(Math.random()<0.5){
        obj.a={
            b:1,
        }
    }
    //console.log(obj.a.b) 
    console.log(obj?.a?.b)
}
testRandom()
//조건에 따라 undefined 가 발생하므로  obj?.a?.b를 통한 옵셔널체이닝이 필요


const object=new Array(1,'test',2)

console.log(object.map)
//프로토타입을 통해서 객체에서 메소드를 사용할 수 있게만들어줌
console.log(Object.values(object))
//프로토 타입이 아닌 메소드 keys, values,entries
