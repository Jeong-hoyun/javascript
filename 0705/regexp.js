const str= `
010-3121-1111
testid@gmail.com
https://omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`;

const regexp=new RegExp('the', 'g')

//g 플래그 단어 검색 수 반환 const regexp=/the/g
const regexp2 =new RegExp('the','gi')
// i 플래그 대소문자 상관없음 const regexp=/the/gi
console.log(str.match(regexp))
console.log(str.match(regexp2))
