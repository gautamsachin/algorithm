// used to find the element in sorted array time complexity is o(logn)

let arr= [1,2,3,4,5,6,7,8,9,10];

function binarySearch(arr,low,high,number){
    //console.log(arr);
    let middleIndex= Math.floor((low+high)/2);
    if(number>arr[middleIndex]) return binarySearch(arr,middleIndex+1,high,number);
    else if (number<arr[middleIndex]) return binarySearch(arr,0,middleIndex,number);
    else return middleIndex;

}

console.log(binarySearch(arr,0,arr.length-1,10));
//console.log(Math.floor(0+9/2));