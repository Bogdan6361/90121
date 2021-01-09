let arr = [1, 'b', 5,5,9,4, 'c',4, 'f'];
let flag = false;
let z = 'c';
for (let i=o; i<arr.length; i++){
    if(arr[i] === z) {
        flag = true;
        break;
        // index = i
    }
} 
if (flag==true) {
    console.log('yes');
} else{
    console.log('no');
}
// create function 

function hasElem(arr, elem){
    for (let i=0; i<arr.length; i++){
        if (arr[i] === elem) {
            return true;
        }
    }
    return false;
}
console.log(arr, 'c');
console.log(`${hasElem(arr,'c')
? 'yes' : 'no'}`);

let num = 31;
flag=false;
for(let i=2; i<num; i++){
    if (num%i===0){
        flag=true;
    }
}
if (flag==true) {
    console.log('yes');
} else{
    console.log('no');
}
flag=false;
/* for(let i=0; i<arr.length-1; i++){
    if (arr[i]===arr[i+1]){
        flag=true;
        break;
    }
}
*/
flag=false;
for(let i=1; i<arr.length; i++){
    if (arr[i]===arr[i-1]){
        flag=true;
        break;
    }
}
if (flag==true) {
    console.log('yes');
} else{
    console.log('no');
}

let n1 = prompt('Enter some number1');
let n2 = prompt('Enter some number2');
if (typeof n1 !== 'number' && typeof n2 !== 'number') {
    throw new TypeError('This is not a number');
}
let sum = null;
try{
    sum=n1+n2;
} catch{
    sum='Error';
}

const myPow = n=> {
    if(typeof n!=='number') {
        throw new TypeError('param n must be a number');
    } if (!Number.isSafeInteger(n)) {
        throw new RangeError('param n is not a safe integer');
    }
    return n*n;
};

const testFun = () => {
    let result=null;
    try{
        result = myPow(4);
    } catch {
result = 'Error for myPow'
    } finally{
        return result;
    }
};

console.log('Result of function = ', testFun());

// classes ---------------------------------------------
class User {
    constructor(name, surname, age){
this.name = name;
this.surname = surname;
this.age = age;
    }
    sayHello() {
        console.log(`Hello, ${this.name} ${this.surname}`);
    }
    getFullName(){
        // console.log(this.name, this.surname);
        return `${this.name} ${this.surname}`; 
    }
    isAdult(){
        return this.age >=18;
    }
}

const user1 = new User('Alex', 'Fox', 20);
const user2 = new User('Sasha', 'Grey', 16);
console.log('User1');
console.log(user1);

user1.sayHello();
user2.sayHello();

console.log(user1.isAdult());
console.log(user2.isAdult());

class Worker {
   constructor (name, surname, rate, days){
       this.name = name;
       this.surname = surname;
       this.rate = rate;
       this.days = days;
   } 
}
