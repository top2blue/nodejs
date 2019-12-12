// 전역 객체 console
function foo() {  
  function bar() {  
    console.trace();  
  }  
    
  bar();  
}  
  
foo(); 