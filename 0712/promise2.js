
import axios from "axios";



axios.get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen'
).then( res=> {   console.log(res.data.Search[0].Title)  })
