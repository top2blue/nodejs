// 전역 객체 console
console.assert('1' == 1);
console.assert('1' === 1);
console.assert('1' !== 1, "일치 오류");
console.assert('1' === 1, "타입 불일치");
var a = 10;  
console.assert(a===10, "첫번째 검사");  
console.assert(a===1,  "두번째 검사");  