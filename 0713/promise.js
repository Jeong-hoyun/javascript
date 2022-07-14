'use strict';

const promise =new Promise((resovle,reject)=>{

console.log('doing...');
    setTimeout(() => {    
    // reject(new Error('no network'))
}, 1000);

});

promise.then(value=>{
    console.log(value);
})
.catch(error=>
    console.error(error))
.finally(()=>{
    console.log('finally')
})    
