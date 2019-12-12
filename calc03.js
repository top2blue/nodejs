/**
 * exports에 직접 객체 할당
 */
var calc = {};

calc.add = function(a, b){
    return a + b;
};

calc.mul = function(a, b){
    return a * b;
};

exports = calc; // 이 부분