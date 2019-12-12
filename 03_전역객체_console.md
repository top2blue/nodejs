# Node_Tutorials

### 전역객체

**1. 전역 객체란 ?**

모듈의 포함없이 nodejs 전역 어디에서든지 바로 사용이 가능한 객체입니다.  예를 들면 지금까지 출력을 위하여 "console"을 사용하였는데 아무런 포함없이 바로 사용이 가능했습니다. 이런 객체를 전역 객체라고 합니다. 다음의 링크를 https://nodejs.org/api/globals.html 통하여 확인이 가능 합니다. 여기서는 자주 사용되는 전역객체 몇 가지만 알아보도록 하겠습니다.



**2. console 객체**

#### 메세지 출력

https://nodejs.org/api/console.html 을 통하여 자세한 사항을 알 수 있습니다.

**Ex09_console_example01.js** 파일을 다음과 같이 작성합니다.

```js
// 전역 객체 console
console.log('log 출력');
console.info('info 출력');
console.warn('warn 출력');
console.error('error 출력');

```

실행 결과는 다음과 같습니다.

```reStructuredText
log 출력
info 출력
warn 출력		// 빨간색으로 표시됨
error 출력  // 빨간색으로 표시됨
```

사실 console 객체는 console.log()를 제외하면 잘 쓰이는 편은 아닙니다. 가장 자주 사용되는 console.log() 메소드를 중점적으로 알아보겠습니다.

#### console.log([data], [...])

console.log()는 콘솔 화면에 문자열을 출력하는 메소드로, 서버의 상태를 서버관리자에게 알려주기 위해 콘솔에 로그를 출력하거나 실행 중간의 실행 결과를 알아보고자 하는 용도로 많이 사용 됩니다.

**Ex10_console_example02.js** 파일을 다음과 같이 작성합니다.

```js
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

```

실행 결과는 다음과 같습니다.

```reStructuredText
문자열 출력
형식화된 "문자열"출력
년도 : 2000년 1월 1일
안녕 홍길동 반갑다!!
JSON 출력 : {"name":"홍길동","age":22}
반갑습니다! 홍길동님은 22세입니다.
반갑습니다! 홍길동님은 22세입니다.
```

문자열을 형식화된 모양으로 출력하거나 문자열을 연결하여 출력합니다. 또는 객체를 출력할때도 사용 됩니다.

**Ex11_console_example03.js** 파일을 다음과 같이 작성합니다.

```js
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

```

실행 결과는 다음과 같습니다.

```reStructuredText
12 / 3 = 4
에러발생 : 0으로 나눌수 없어요 // 빨간색으로 표시됨
```



#### 실행 시간 출력

**Ex12_console_example04.js** 파일을 다음과 같이 작성합니다.

```js
// 전역 객체 console
console.time("calc");
var sum=0;
for(var i=1;i<=1000000;i++){
	sum += i;
}
console.log("1~1000000까지 합 : %d", sum);
console.timeEnd('calc');
```

실행 결과는 다음과 같습니다.

```reStructuredText
1~1000000까지 합 : 500000500000
calc: 10.986ms
```

타이머를 시작해 작업이 얼마나 걸리는지 추적할 수 있습니다. 각 타이머에게 고유한 이름을 줄 수 있고, 한 페이지에 최대 10,000개의 타이머를 설정할 수 있습니다. 같은 이름으로 [`console.timeEnd()`](https://developer.mozilla.org/ko/docs/Web/API/Console/timeEnd)를 호출할 때, 브라우저가 밀리초 단위로 경과한 시간을 출력합니다.



#### 객체 출력

**Ex13_console_example05.js** 파일을 다음과 같이 작성합니다.

```js
// 전역 객체 console
var obj1 = {};
var obj2 = {
	"name" : "한사람"
};
var obj3 = {
	"name" : "한사람",
	"age" : 22,
	toString : function() {
		return this.name + "(" + this.age + "세)";
	}
};

console.dir(obj1);
console.dir(obj2);
console.dir(obj3);
console.log(obj1);
console.log(obj2);
console.log(obj3);
```

실행 결과는 다음과 같습니다.

```reStructuredText
{}
{ name: '한사람' }
{ name: '한사람', age: 22, toString: [Function: toString] }
{}
{ name: '한사람' }
{ name: '한사람', age: 22, toString: [Function: toString] }
```

과연 쓸곳이 있을까요? 브라우져에서 개발자 도구의 console에서 DOM객체를 출력해 보시기 바랍니다.

```js
console.dir(document.body);
console.log(document.body);
```

실행 결과는 다음과 같습니다. log는 Tag가 출력되지만 dir은 객체의 정보가 출력 됩니다. <img src="D:\Java\jspWorkspace\Node_Tutorials\console_01.png" alt="console_01" style="zoom:50%;" />



#### 호출 횟수 세기

몇 번 호출되었나를 로깅하고 싶을 때 사용합니다. 인자는 카운터의 이름입니다. 

**Ex14_console_example06.js** 파일을 다음과 같이 작성합니다.

```js
// 전역 객체 console
console.count('counter1');
console.count('counter1');
console.count('counter2');
console.count('counter2');
console.count('counter1');
console.count('counter2');
console.count('counter1');
console.count('counter2');
```

실행 결과는 다음과 같습니다.

```reStructuredText
counter1: 1
counter1: 2
counter2: 1
counter2: 2
counter1: 3
counter2: 3
counter1: 4
counter2: 4
```



#### ASSERT

이 메소드는 인자값이 **false인 경우**에만 콘솔로그에 출력하며, exception을 발생시킨다. true인 경우에는 아무것도 출력되지 않는다. 로그 출력시 두번째 인자로 제공되는 값을 추가로 출력해 주는데, 문자열일 경우에는 해당 문자열이 출력되며, 객체의 경우에는 객체 정보가 출력된다. 

**Ex15_console_example07.js** 파일을 다음과 같이 작성합니다.

```js
// 전역 객체 console
console.assert('1' == 1);
console.assert('1' === 1);
console.assert('1' !== 1, "일치 오류");
console.assert('1' === 1, "타입 불일치");
var a = 10;  
console.assert(a===10, "첫번째 검사");  
console.assert(a===1,  "두번째 검사");  
```

실행 결과는 다음과 같습니다.

```reStructuredText
Assertion failed
Assertion failed: 타입 불일치
Assertion failed: 두번째 검사
```



#### Trace

 프로그래밍 언어에서는 함수를 호출할 때 스택(Stack)을 사용하여 함수가 종료된 후 되돌아올 정보를 담아놓는다. 이렇게 되면 함수가 함수를 부르고, 그 함수가 또 다른 함수를 부르게 되면 **스택에 함수간 호출된 순서와 관련 정보들**이 고스란히 쌓이게 된다.  이렇게 쌓여있는 **스택의 함수 호출정보를 출력**해 주는 기능이 바로 console.trace()이다.

**Ex16_console_example08.js** 파일을 다음과 같이 작성합니다.

```js
// 전역 객체 console
function foo() {  
  function bar() {  
    console.trace();  
  }  
    
  bar();  
}  
  
foo(); 
```

실행 결과는 다음과 같습니다.

```reStructuredText
Trace
    at bar (D:\Java\jspWorkspace\Node_Tutorials\Ex16_console_example08.js:4:13)
    at foo (D:\Java\jspWorkspace\Node_Tutorials\Ex16_console_example08.js:7:3)
    at Object.<anonymous> (D:\Java\jspWorkspace\Node_Tutorials\Ex16_console_example08.js:10:1)
    at Module._compile (internal/modules/cjs/loader.js:956:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:973:10)
    at Module.load (internal/modules/cjs/loader.js:812:32)
    at Function.Module._load (internal/modules/cjs/loader.js:724:14)
    at Function.Module.runMain (internal/modules/cjs/loader.js:1025:10)
    at internal/main/run_main_module.js:17:11
```

상단의 3줄을 보면 다음과 같습니다. 10행의 foo() --> 7행의 bar() --> 4행의 console.trace() 순으로 호출됨을 확인이 가능합니다.

```    text
    at bar (D:\Java\jspWorkspace\Node_Tutorials\Ex16_console_example08.js:4:13)
    at foo (D:\Java\jspWorkspace\Node_Tutorials\Ex16_console_example08.js:7:3)
    at Object.<anonymous>                
            D:\Java\jspWorkspace\Node_Tutorials\Ex16_console_example08.js:10:1)
```



