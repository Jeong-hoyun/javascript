// OMDb API
//Query string 
// axios install

import axios from "axios";

function serchMovies(){
 axios.get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
 .then( res=> { 
     console.log(res.data.Search[0].Title)  
    })
}
serchMovies()

