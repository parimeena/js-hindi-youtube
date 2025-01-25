let date = new Date();
console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());
console.log(date.toLocaleTimeString());
console.log(typeof date);
let myCreateDate = new Date(2025,0,25)
let myCreatedDate = new Date("2025-01-25")
console.log(myCreateDate.toDateString());
console.log(myCreateDate.toLocaleString());
console.log(myCreatedDate.toLocaleString());
let myTimeStamp = Date.now()

console.log(myTimeStamp.toLocaleString());

console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000))
console.log(date.getMonth()+1);
console.log(date.getDay());
console.log(`today's day is ${date.getDay()} and the time is ${date.toLocaleTimeString()}`)

date.toLocaleString('default',{
    weekday: "long"
})

console.log(date);
