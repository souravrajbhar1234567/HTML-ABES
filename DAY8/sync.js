console.log("before func invocation");
const waitforSomeTime=(time)=>{
    const start=Date.now();
    while(Date.now()-start<time){

    }
}
waitforSomeTime(3000);
console.log("after func invocation");
console.log("before func invocation2");
waitforSomeTime(5000);
console.log("after func invocation2");
greet();
function greet(){
    console.log("Hello World");
}
greet();
const greetAsexpression=function(){
    console.log("Hello World from expression");
}
greetAsexpression();            