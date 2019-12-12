// 전역 객체 console
console.time("calc");
var sum=0;
for(var i=1;i<=1000000;i++){
	sum += i;
}
console.log("1~1000000까지 합 : %d", sum);
console.timeEnd('calc');
