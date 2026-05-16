//41 write a function to check if a number is even or odd
// function even_odd(number){
//   if(number%2===0){
//     return "even"
//   }
//   else{
//     return "odd"
// }
// return 0
// }
// console.log(even_odd(6));

// 42 acceps an array and return a sum of teh array 
// function sum_of_array(arr){
//   let sum = 0;
//   for(let i=0;i<arr.length;i++){
//     sum = sum+arr[i];
//   }
//   return sum;
// }
// let arr = [1,4,5,6,7,8,9,10];
// console.log(sum_of_array(arr))

// // 43 calculaet the circle witha given circle 
// function circle(r){
// let area = 2*22/7*r;
// return area
// }
// console.log(circle(4));

// // 44 function find te maximum of two numbers 
// function max_two(a,b){
// if(a>b){
//   return a
// }
// else{
//   return b
// }
// return -1
// }

// console.log(max_two(5,7))

//46 write a function factprial 
// function fact(n){
//   let f = 1;
//   for(let i=1;i<=n;i++){
//     f = f*i
//   }
//   return f
// }
// console.log(fact(5))

// function take a string and return its reverse 
// function revstr(s){

//    s = s.split("");

//    let n = Math.floor(s.length / 2);

//    for(let i = 0; i < n; i++){

//       let temp = s[i];

//       s[i] = s[s.length - i - 1];

//       s[s.length - i - 1] = temp;
//    }

//    return s.join("");
// }

// let s = "sachin";

// console.log(revstr(s));