import myData from './json.json' assert {type: 'json'};

const str =JSON.stringify(myData)
const obj= myData.map(element=>{ console.log(element)  })

console.log(obj)




