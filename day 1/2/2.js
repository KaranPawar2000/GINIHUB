//for in loop in javascript
let obj = {
    Karan: 98,
    Pawar: 70,
    Vijay: 80
};

for (let name in obj) {
    let marks = obj[name];
    console.log(name + ': ' + marks);
}

//function in javascript
const a=(a,b,c,d,e)=>{
 return (a+b+c+d+e)/5;
}
console.log(a(1,2,3,4,5));

//String
let text = "Hello world, welcome to the universe.";
text.startsWith("Hello");

let text1 = "Hello world";
let result1 = text.endsWith("world");
console.log(result1)

let text2 = "Hello world, welcome to the universe.";
let result = text.includes("world");
console.log(result)

let text3 = "Hello World!";
let result3 = text.toLowerCase();
console.log(result3)

let text4 = "Hello World!";
let result4 = text.toUpperCase();
console.log(result4)

let text5 = "       Hello World!        ";
let result5 = text.trim();
console.log(result5)

