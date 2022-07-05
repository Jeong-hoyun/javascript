const str = `
010-3121-1111
testid@gmail.com
https://omdbapi.com/?apikey=7035c60c&s=frozen/
The quick brown fox jumps over the lazy dog.
abbcccdddd.com
fox is fast!
`;

// console.log(str.match(/^test/gim))  대소문자 상관없이 test로 시작하는 문장 검색해서 반환

const regexp=str.match(/com/g)
