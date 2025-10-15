const date = new Date();
console.log(date);

const year = date.getFullYear();
const month = date.getMonth() + 1;              
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

console.log(`Current Date and Time: ${day}/${month}/${year} ${hours}:${minutes}:${seconds}`);