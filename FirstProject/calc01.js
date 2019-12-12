/**
 * 사용자 정의 모듈 만들기 1
 * 첫 번째 방법 : exports에 직접 프로퍼티를 설정
 */
exports.add = function(a, b){
    return a + b;
};

exports.sub = function(a, b){
    return a - b;
};

exports.mul = function(a, b){
    return a * b;
};

exports.div = function(a, b){
    return a / b;
};
