function a(){
console.log(this)
//js : windows,globalThis
//use strict :undefined node모드는 use strict 상시
}

//a();

const obj={
    name:'hoyun',
    sayName:()=>{
        console.log(this.name)
        function inner(){
            console.log(this.name)
        }
        inner()
    }
}


const obj2={
    name:'hoyun',
    sayName(){
        console.log(this.name)
        function inner(){
            console.log(this.name)
        }
        inner();
    }
}


//obj.sayName();
//undefined arrow function은 최상단 this를 향함
 const obj3 ={
    name:'robin',
    sayBy(){
        console.log(this.name);
        const inner =()=>{
            console.log(this.name);
        }
        //function inner2(){
        //     console.log(this.name);
        //  }
        inner()
        //inner2() 일반 함수일 경우 
        //Cannot read properties of undefined
    }
 }

//  obj3.sayBy()

const header={
    addEventListener: function(eventName,callback){
        callback.call(this);
        //this가 header
        callback.call(header)
    }
}

const person ={
    name:'손흥민',
    sayHi(){
        console.log(this.name);
    }
 }


 const data={
    datas:[1,2,3,4,5],
    all(){
    olldata: console.log(this.datas.map(e=>e+=e)) 
    },
    

}


console.log(data.all())

