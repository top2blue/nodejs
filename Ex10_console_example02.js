// 전역 객체 console
console.log('문자열 출력');
console.log('형식화된 "%s"출력', '문자열');
console.log('년도 : %d년 %d월 %d일', 2000,1,1);

console.log("안녕", "홍길동", "반갑다!!"); // 문자열 연결

var user = {name:"홍길동", age:22};
console.log('JSON 출력 : %j', user);
console.log('반갑습니다! %s님은 %d세입니다.', user.name, user.age);

// ES6 지원
const name = '홍길동';
const age = 22;
console.log(`반갑습니다! ${name}님은 ${age}세입니다.`); 
