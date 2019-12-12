// 전역 객체 console
try{
	var a = 12;
	var b = 3;
	if(b===0){
		throw new Error("0으로 나눌수 없어요");
	}else{
		console.log("%d / %d = %d", a,b,a/b);
	}
	var b=0;
	if(b===0){
		throw new Error("0으로 나눌수 없어요");
	}else{
		console.log("%d / %d = %d", a,b,a/b);
	}
}catch (e) {
	console.error("에러발생 : " + e.message);
}
