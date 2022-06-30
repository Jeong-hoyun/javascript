// 전개 연산자 (spread)


const car=['toyota','tsla','honda','hyndai']
console.log(...car)

function toObj(a,b,...c){
    return{
        a,
        b,
        c
    }
}
const arrowtoObj=(a,b,...c)=>({a,b,c})

console.log(toObj(...car))
console.log(arrowtoObj(...car))