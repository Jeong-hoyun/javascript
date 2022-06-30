// 일반 함수는 호출 위치에 따라 this정의!
// 화살표 함수는 자신이 선언된 함수 범위에서 this 정의

const heropy={
    name: 'homin',
    normal:function(){
        console.log(this.name)
    },
    arrow:()=> console.log(this.name)
}

heropy.normal()
heropy.arrow()

const amy={
    name:"Amy",
    normal:heropy.normal,
    arrow:heropy.arrow
}
amy.normal()
amy.arrow()

//화살표함수를 감싸고 있는 타임아웃 메소드가 있기에 
//this가 timer가 됨 

const timer={
    name:'Heropy!!',
    timeout:function(){
        setTimeout(()=>{
            console.log(this.name)
        },2000)
    }
}

timer.timeout();