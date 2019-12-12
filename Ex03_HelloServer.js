/**
 * 간단한 http서버 실행하기
 */
var http = require('http');

http.createServer(function(req, res) {
	res.writeHead(200, {
		'Content-Type' : 'text/html;charset=UTF-8'
	});
	res.write('Hello World!<br>');
	res.write('Hello NodeJS!<br>');
	res.write('Hello NodeJS!<br>');
	res.write('반갑다 노드JS!<br>');
	res.end();
}).listen(10004);
console.log('서버 시작 : "http://127.0.0.1:10004/"로 접속해보세요!!!');