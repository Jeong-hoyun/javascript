const map=new Map();

const kim= {name:'kim'}
const kang={name:'kang'}
//get(데이터 불러오기)   has() 존재여부 
map.set(kim,'teacher').set(kang,'frontend')

// 내부 객체 데이터 변환가능(일부데이터)
//const original=[{a:1},{a:5},{a:2},{a:3}];
//const mapFunction=(item,index)=>item.a*2
//const a=original.map(mapFunction );
//console.log(a)
// 내부 객체 데이터 변환가능(전체데이터중 일부만)
const original=[{a:1},{a:5},{a:2},{a:3}];
const newOriginal=original.map(item=>{ a:item.a*2  })
console.log(newOriginal)










