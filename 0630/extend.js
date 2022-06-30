class nomal{
    constructor(na,ages){
        this.na=na
        this.ages=ages
    }
}

class level extends nomal{
    constructor(na,ages,speed){
        super(na,ages)
        this.speed=speed             
    }
    
}

const monk=new level('nad',50,123)

console.log(monk)