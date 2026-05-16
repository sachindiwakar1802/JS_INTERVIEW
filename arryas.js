// 31  create an array of your top 5 fav movies and log it 
let arr = ["a","b","c","d","e"];
console.log(arr)
//32 second elemnt of the arrays
console.log(arr[1])
//33 

//34 slice to get first 3 elemnt 
console.log(arr.slice(0,3))

//34 remove the last elm of the array 
console.log(arr.splice(4,1))
console.log(arr)
//35 first 3 elemnt use slice() 
console.log(arr.slice(0,3))
//36 specific index in the array 
console.log(arr.indexOf("a"));
//37 include chek the particular elemnt in teh array
console.log(arr.includes("b"))
// 38 combine two arra 
let arr1 = [1,3];
let arr2 = [2,4];
let finnal = arr1.concat(arr2)
console.log(finnal)
//39 short array in teh assending order
let arr3 = [5,3,3,24];
arr3.sort((a,b) => a - b);
console.log(arr3);

//40 copy array 
let newarra = [...arr3]
console.log(newarra)