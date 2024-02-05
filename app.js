// const amount = 9;


// if(amount < 10){
//     console.log("smaller element");
// }
// else{
//     console.log("Greater element");
// }

// console.log(`My first element is made`)


// const john  = "john";
// const Deepak = "Deepak";

// module.exports = {john,Deepak};

const os = require('os');


// imfo about current user


const user = os.userInfo();
console.log(user)

// method return the system uptime in seconds

console.log(`THe system uptime is ${os.uptime()}`)

const currentOS = {
    name : os.type(),
}

console.log(currentOS)