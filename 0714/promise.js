// <1> promise 연습문제

const URLs='https://jsonplaceholder.typicode.com/posts/1'
const promiseOne=new Promise((resolve)=>{  
fetch(URLs)
 .then(response=>response.json())
 .then((json)=>
  {console.log(json.title);
   resolve();
  })})


  async function f() {

    const promiseTwo=fetch(URLs)
         .then(response=>response.json())
         .then((json)=>
          {console.log(json.title);
           resolve();
          })
  
    let result = await promiseTwo;
  
    return result 
  }
  