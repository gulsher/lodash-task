//1. map
let myArr = [5, 10, 15];
let empArr = [];

let add = a => {
  return a + 100;
};

let double = a => {
  return a * 2;
};

let myMap = (mylist, func) => {
  for (let i = 0; i < mylist.length; i++) {
    empArr.push(func(mylist[i]));
  }
  console.log(empArr);
};
//  myMap(myArr, add);
// myMap(myArr, double);

//2. reduce
let sum = (acc, val) => {
  return acc + val;
};
let max = (a, b) => {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};

let myReduce = (mylist, func) => {
  let count = 0;
  for (let i = 0; i < mylist.length; i++) {
    count = func(count, mylist[i]);
  }
  console.log(count);
};
// myReduce(myArr, sum);
//myReduce(myArr, max);

//3. find

let even = num => {
  if (num % 2 == 0) {
    return num;
  }
};

let odd = num => {
  if (num % 2 == 1) {
    return num;
  }
};
let myFound;
let findarr = [1, 2, 3, 4, 5, 6];

let myFind = (mylist, func) => {
  for (let i = 0; i < mylist.length; i++) {
    if (func(mylist[i]) !== undefined) {
      myFound = mylist[i];
      break;
    }
  }
  console.log(myFound);
};

// myFind(findarr, even);
// myFind(findarr,odd);

//4. filters

let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myFilter = (mylist, func) => {
  let myFilterarr = [];
  for (let i = 0; i < mylist.length; i++) {
    if (func(mylist[i]) !== undefined) {
      myFilterarr.push(func(mylist[i]));
    }
  }
  console.log(myFilterarr);
};
// myFilter(newArray, even);
// myFilter(newArray,odd )
