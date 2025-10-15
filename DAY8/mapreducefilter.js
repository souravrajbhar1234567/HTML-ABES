let arr =[1,2,3,4,5,6,7,8,9,10];
const mapArray=arr.map((ele)=>ele+2);
console.log("mapArray",mapArray);
const reduceArray=arr.reduce((acc,ele)=>acc+ele,0);
console.log("reduceArray",reduceArray);
const filterArray=arr.filter((ele)=>ele%2===0);
console.log("filterArray",filterArray);