
        const arr=[
            {
            name:'kim',
            age:10,
            },{
            name:'park',
            age:15,
            },{
            name:'lee',
            age:12,
            },{
            name:'choi',
            age:13,
            },{
            name:'jin',
            age:20,
            },{
            name:'woo',
            age:30,   
         }]
    
const findAge =(name)=>{
  //  return function (item){
   //     if(item.name===name){ return true; }
 //   }
 return (item)=>{ if(item.name===name){   return    true; }  }
}

arr.find(findAge('park')).age

