//find 주어진 판별 함수를 만족하는 첫번째 요소값을 반환한다
//const array2=[521,231,13];
//const found =array.find(tgh=>tgh>10)

//console.log(found)

//length
//console.log(array.length)
//concat 원본 데이터 안변함
//console.log(array.concat(array2))
//console.log(array)

//.forEach()

const array=[5,2,13];
array.forEach(element => { console.log(element)   });
array.forEach(function(element,index) { console.log(element,index); });

//.map()
const maps=['korea','japan','china'];
const b= maps.map(function(element,index){
     return `${element}-${index}`
})
const c=maps.map((element,index)=>
({    
    id:index,
    nation:element
})
)

console.log(b);
console.log(c);



