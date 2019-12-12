/**
 * Node.js OS 내장 모듈 by require('os')
 * 내장 모듈 중 OS 관련 정보를 추출하는데 유용하고 편리한 모듈.
 * https://nodejs.org/api/os.html 
 */
var os = require('os');

console.log("os.hostname = " + os.hostname());
console.log("os.type = " + os.type());
console.log("os.platform = " + os.platform());
console.log("os.arch = " + os.arch());
console.log("os.release = " + os.release());
console.log("os.totalmem = " + Math.ceil(os.totalmem()/(1024*1024*1024)) + "GB");
console.log("os.freemem = " + Math.ceil(os.freemem()/(1024*1024*1024)) + "GB");