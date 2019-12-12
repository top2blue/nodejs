/**
 * 사용자 정의 모듈 만들기 2
 * 두 번째 방법 : 새로운 객체에 프로퍼티를 설정 후 module.export에 할당하기
 */
var calc = {};
calc.add = function(a, b){
    return a + b;
};

calc.sub = function(a, b){
    return a - b;
};

calc.mul = function(a, b){
    return a * b;
};

calc.div = function(a, b){
    return a / b;
};

module.exports = calc;
