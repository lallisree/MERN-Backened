// let arr = [10, 25, 5, 40];
// let largest = arr[0];
// let second = arr[0];
// let third = arr[0];

// for (i = 0; i < arr.length; i++) {
//   if (arr[i] > largest) {
//     third = second;
//     second = largest;
//     largest = arr[i];
//   } else if (arr[i] > second && arr[i] !== largest) {
//     third = second;
//     second = arr[i];
//   } else if (arr[i] > third && arr[i] !== second && arr[i] !== largest) {
//     third = arr[i];
//   }
// }
// console.log(largest);
// console.log(second);
// console.log(third);


//


let arr = [10, 25, 5, 40];
let largest = arr[0];
let second = arr[0];
for(i=0;i<arr.length;i++){
    if(25<40){
        second = largest
        largest = arr[i]
    }
    if(25<40 && 25>40){
        second = arr[i]
    }
}
console.log(largest);
console.log(second);

