var y;
// var 는 항상 최상단으로 호이스팅 필요
function test(){
    const a=1;
    const b=2;
 if(true){
    //block
    if(a<b){
        const c='cc';
        // 선언은 항상 최상단에서 
        console.log(c);
        //const c='cc';
        //Cannot access 'c' before initialization
    }
 }
 
}

function test2(){
    //console.log(a)
    // a is not
}
const x= 'x1';
console.log(z);

test2()
test()