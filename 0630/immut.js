//원시 데이터 String ,Num.. ,Boolean,undefi..,null
//참조형 데이터 : Object, Array,Function
let a={K:1}
let b={k:1}

console.log(a,b,a===b)
a.K=5
b=a
console.log(a,b,a===b)
let c=b
console.log(a,b,c,a===c)
a.K=9
console.log(a,b,c,a===c)





