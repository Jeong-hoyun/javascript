const x='x';

function c(){
    const y='y';
    console.log('c');
}

//debugger 호출로 스텍 파악 가능

function a(){
    const x='x';
    console.log('a');
    function b(){
        const z='z';
        console.log('b');
        c();
    }
    b();
}

// javascript 의 callstack (LIFO)

a();
c(); 

// a()의 선언   


// stack   fuc c > } 후  console 실행 3 >  
// stack   fuc b >  } 후 console 실행 2 >  
// stack   fuc a > } 후 console 실행 1 >  

 
