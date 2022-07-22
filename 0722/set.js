//set 은 중복을 허용하지 않는다!  
// set 자체로 쓸 때는 index 접근 불가! 
const set= new Set([1,3,455]);
set.add(1);
set.add(3)
set.add(3)

// 중복 계산식
//const uniq=array=>array.filter((v,i,self)=>self.indexOf(v)===i);
//console.log(uniq([3,2,3,4,5]))


console.log(set)

// union 전부 더하기
Set.prototype.union=function(set){
    const result=new Set(this);

    for(const value of set){
        result.add(value)
    }
    return result;
}