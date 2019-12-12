// 전역 객체 setInterval(콜백함수, 시간)
// 전역 객체 clearInterval(타이머변수)
function sayHello(){
	console.log("Hello Node.js!!!");
}
// 3초마다 sayHello함수 실행
setInterval(sayHello,3000);
var count = 0;
var timer = setInterval(function(){
	console.log(new Date());
	count++;
	// 타이머 해제
	if(count>=10) {
		clearInterval(timer);
	}
}, 1000);