//async & await
// clear style of using promise
const p1=new Promise((resolve,reject)=>setTimeout(() => {
    resolve('!!!!!!');
 }, 2000));


async function getA(){
    return 'A'
}
async function getB(){
    return 'B'
}

async function pickFruits(){
  try{
  const aA =await getA()
  const bB =await getB()
  return `${aA}+${bB}`
}catch{
    return console.error();
}
}

pickFruits().then((e)=>console.log(e))