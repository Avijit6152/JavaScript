// let cities=["delhi","mumbai","bengaluru","kolkata","bhubaneswar","pune","chennai","cuttack"];

// for(let city of cities){
//     console.log(city);
//     //city.toUpperCase;
//     console.log(city.toUpperCase());
// }

// let nums=[];
// for(let i=1;i<=100;i++){
//     nums.push(i);
// }

// console.log(nums);

// let items = [1,22,333,4444,55555,666666,7777777,88888888,999999999];

// let i=0;
// let add=0;
// for(let val of items){
//     console.log(`value at index ${i} = ${val}`);

//     //  add=add+val;
//     // console.log(add);

//     let offer=val/10;
//     items[i]=items[i]-offer;

//     console.log(`value after offer = ${items[i]}`);
//     i++;
// }
// console.log(items);
// for(let i=0;i<items.length;i++){
//     let offer=items[i]/10;
//     items[i] -=offer;
// }

// console.log(items);

let nums=[];
 for(let i=1;i<=10000;i++){
    nums.push(i);
}

 console.log(nums);

 for(let n of nums){
    if(n%2 === 0){
      console.log(`${n} is even number`);
    }
    else{
        console.log(`${n} is odd number`);
    }
 }
