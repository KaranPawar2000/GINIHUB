// ARRAY
// User input
let a =[];

for(let i=0;i<5;i++){
  a[i]=prompt("Enter a value for index "+i+ ":");
}
for(let i=0;i<5;i++){
    console.log(a[i]);
}

// Map
const arr1 =[1,2,3,4,5];
const arr2 = arr1.map(myfun);

for(let i=0;i<arr2.length;i++)
{
    console.log(arr2[i]);
}

function myfun(value,index,array){
    return value*2;
}

// filter
let a1 =[23,54,65,24,11,12,7,8];
a2 =a1.filter(f);
for(let i=0;i<a2.length;i++)
{
    console.log(a2[i]);
}

function f(value){
return value>18;
}

//sort,reverse
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});


// form
Array.from("ABCDEFG");



