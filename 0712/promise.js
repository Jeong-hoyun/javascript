import axios from "axios";
let p = new Promise(function() {
    axios.get('https://www.omdbapi.com/?apikey=7035c60c&s=bet').then( res=> { 
        console.log(res.data.Search.map(( e,index )=> 
        {if(index===1)   { return  e        }else{  }}
           
            )) })  
  });


p.then(
  result => console.log(result), 
  error => console.log(error) 
);  


// promise의 순서
let a=2;
const setTime=new Promise((resolve)=>{
    setTimeout(()=>{
        a=5;
        console.log(a);
        resolve(a);
    },1000)

})

console.log('testing');

setTime.then((result)=>{
     console.log('result',result);  
});

//  1.amonynos  2.console.log('testing')  3. promise 내부에 있는 res.data.Search.map 실행  4.setTime(console.log) 실행 4. setTime.then 실행


// testing은 바로 동기함수이므로 바로 실행
// then 은 addevent..( 비동기 함수)과 비슷함
//then, setTimeOut을 바로 쓰면 백그라운드에서 실행 준비를 함



const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('foo');
    }, 300);
  });
  
  promise1.then((value) => {
    console.log(value);
    // expected output: "foo"
  });
  
  console.log(promise1);
  // output: [object Promise]