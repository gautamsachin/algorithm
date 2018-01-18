// implementing linear search  time complexity is 0(n) considering the worst case

let arr = [1,2,3,4,5,6,7];

// function linear(arr,number){
//     let place=-1;
// arr.forEach( function myFunction() {
//     setTimeout(function(){ console.log('baad wala hello'); }, 3000);
// });
// console.log('hello');
// }

function linear(arr,number){
    for(let i =0 ;i< arr.length; i++){
        if(number=== arr[i]) return i;
    }
    return -1;
    }

console.log(linear(arr,5));
