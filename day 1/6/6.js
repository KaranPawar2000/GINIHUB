//callback1
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);

//promises
function myDisplayer(some) {
    document.getElementById("demo1").innerHTML = some;
  }
  
  let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
  
  
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  
//   myPromise.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
//   );

//   let myPromise = new Promise(function(myResolve, myReject) {
//     setTimeout(function() { myResolve("Genihub"); }, 3000);
//   });
  
//   myPromise.then(function(value) {
//     document.getElementById("demo").innerHTML = value;
//   });
//asyc await
async function myFunction() {
    return "Hello";
  }
  myFunction().then(
    function(value) {myDisplayer(value);}
  );