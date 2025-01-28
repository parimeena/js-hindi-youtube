const tinderUser ={}
// or we can use
//const tinderUser - new Object()
tinderUser.name ="priyal"
tinderUser.id="132@123"
tinderUser.isLogged = false;


console.log(tinderUser);

const regularUSer={
  email:"pari@gmail.com",
  fullName: {
    name:{
         firstName:"pari",
         lastName:"meena"
    }
}}

console.log(regularUSer.fullName.name.firstName);

const obj1 ={1:"a",
     2:"b"}
const obj2={3:"c",
     4:"d"}

const obj3={...obj1,...obj2}
//const obj3 = Object.assign({},obj1,obj2)


//When data comes fron database
console.log(obj3);

const users=[
    {
        id:1,
        email:"parimeena@gmail.com"
    },
    {
        id:1,
        email:"parim@gmail.com"
    }
]

console.log(users[1].email);
console.log(users[0].email);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(Object.hasOwnProperty("name"));

const course={
    
}