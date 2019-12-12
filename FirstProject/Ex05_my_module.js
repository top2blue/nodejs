/**
 * calc01.js 또는 calc02.js 파일 불러오기
 * require()는 exports 객체를 반환한다.
 */
var calc01 = require("./calc01.js");
var calc02 = require("./calc02");

console.log(calc01.add(3, 5));
console.log(calc02.add(3, 5));