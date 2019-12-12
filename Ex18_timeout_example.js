// 전역 객체 setTimeout(콜백함수, 시간)
// 전역 객체 clearTimeout(타이머변수)
function sayHello(){
	console.log("Hello Node.js!!!");
}
// 1초 후에 sayHello함수 1회실행
setTimeout(sayHello, 1000);
setTimeout(function(){
	console.log("나는 2초후에 실행!!!");
}, 2000);

var timer = setTimeout(function(){
	console.log("나는 1초후에 실행!!!");
}, 1000);
// 타이머 해제
clearTimeout(timer);