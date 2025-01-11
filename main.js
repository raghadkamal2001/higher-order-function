
//using map ex1
let numbers =[1,2,3];


function integers(arr){
    let result= arr.map(num => Math.pow(2, num));
    return  result;
};

console.log(integers(numbers));





//using for each ex1

let arr =[1,2,3];

function eachmethod(arr){
    let result=[];
    arr.forEach(num => {
        result.push(Math.pow(2, num));
      });
      return result;
}
console.log(eachmethod(arr));




// using for loop
let values =[1,2,3];

function formethod(values) {
    let result = [];
    for (let i = 0; i < values.length; i++) {
      result.push(Math.pow(2, values[i]));
    }
    return result;
  }

  console.log(formethod(values));








  //question2

  ar=[1,2,3,"Rawan"]
  function arrevenodd(arr){
  let result=  arr.map(num => { if (typeof num !== 'number') {
        return 'N/A';
      } else {
        return num % 2 === 0 ? 'even' : 'odd';
      }
    });
return(result);
  }
  
  console.log(arrevenodd(ar))


//q3
let names = ["Rawan", "Wesam", "Hind", "Muhammad", "Esraa", "Dareen"];

names.forEach(function(item) {
    console.log(item);
  });

  //using loop
  for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
  }


  //q4

  let items=[1,2, 3, 4, 5,9,10,12,15]
  function fizzbuzz(arr){
    let result = [];
    arr.forEach(num=>{
        if(num%3===0 && num %5===0){result.push("Fizz Buzz");}
        else if (num%3===0){result.push("Fizz")}
        else if(num%5 ===0){result.push("Buzz")}
        else{result.push(num)}
    })
    return result;


  };
  console.log(fizzbuzz(items))


  
  
  
  
  
  
  

 
 


