
// 모듈 디폴트 함수는 한번만 내보내기가 가능하다

export default function getType(data){
   return Object.prototype.toString.call(data).slice(8,1)
}