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
