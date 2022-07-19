


        const a=['change','keyup','keydown','keypress']

        for (let index = 0; index <a.length; index++) {
            const myinput=document.createElement('input');
            const myinputs=document.createElement('input');
            myinput.addEventListener(a[index],(e)=>console.log(e.target.value))
            myinputs.addEventListener(a[index],(e)=>console.log(a[index]+e.target.value))
            myinput.style.margin='10px 200px'
            document.body.appendChild(myinput) 
             
            if(index===3){
                myinputs.style.margin='0 500px'
                document.body.appendChild(myinputs) 
            }         
        }