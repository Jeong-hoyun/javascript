import axios from "axios";

// get 함수 요청
const MovieUrl='https://www.omdbapi.com/?apikey=7035c60c&s=';

 const p1=axios.get(`${MovieUrl}frozen`)
    .then((result)=> {
        console.log(result.data.Search.map( (e)=>e.Title))
    })
    .catch((error)=>{console.error(error); 
    });




    (async ()=>{
        try{
            const result=await axios.get(`${MovieUrl}bet`);
            const resultdata=  result.data.Search.map( (e,index)=>e.Title[index])
            console.log(resultdata); //{}
        }catch(error){
            console.error(error);
        }
    })
    



   