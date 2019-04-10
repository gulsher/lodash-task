//map

var array1 = [1, 2, 3];
let array2 = [];

let myObj = {
  one: 2,
  two: 4,
  three: 8
};
let myArr = [];

let myMap = function(mylist, func) {
  if (!Array.isArray(mylist)) {
    myArr = Object.values(mylist);
    myMap(myArr, array2);
  } else {
    func = mylist.map((value, index) => {
      return value * 3;
    });
  }
  console.log(func);
};

myMap(array1, array2);

myMap(myObj, array2);

//reduce

function myReduce(mylist, func) {
  let answer = mylist.reduce(func);
  console.log(answer);
}

function sum(acc, val) {
  return acc + val;
}
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
myReduce(array1, sum);
myReduce(array1, max);

//find
var users = [
  { user: "rahul", age: 36, active: true },
  { user: "amit", age: 40, active: false },
  { user: "abc", age: 1, active: true }
];
let age = function(i) {
  return i.age < 40;
};

function myFind(mylist, func) {
  let myuser = mylist.find(func);
  console.log(myuser);
}

myFind(users, age);

//filters

let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function even(i) {
  return i % 2 == 0;
}
let myFilter = function(mylist, func) {
  let myfil = mylist.filter(func);
  console.log(myfil);
};

myFilter(newArray, even);
