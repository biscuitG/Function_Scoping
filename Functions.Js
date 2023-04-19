
function Myf(b,a,c){

    console.log(typeof a);
}

Myf(32,"ased");

Myf(34) ;// here b and c will undefined in Myf

console.log(Myf);
 function Myf1(a=0,b=2,c=5){
    console.log(a+b+c);
}
Myf1(2,4,6);


// Anonymous Function and store in variable
const myfunc= function(a){
  console.log(a*a);
}


myfunc(2,5);

let arr=[10,20,30,40,50];
let val=function(arr=[]){
    let sum=0;
    for(let i=0;i<arr.length;i++) sum+=arr[i];
    return sum;
}
console.log(val(arr));


// Important
// {
           //this is block with no condn
// }

let a=20;
{
    let a=30; // if not delcare bot jagah 20
    console.log(a); // 30 
}
console.log(a); // 20 due to let is block scope


var c=20;
{
    var c=30; // if not delcare bot jagah 20
    console.log(c); // 30 
}
console.log(c); // 30 due to var is function scope

// same gors for const


{
    var der=35;
}
console.log(der);

