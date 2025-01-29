
// there ..nums1 is rest not spread
function calculateCartPrice(...num1)
{
    return num1;
}
console.log(calculateCartPrice(200,300,400));
const user ={
    username:"pari",
    age:"21"
}

function handObject(anyObject)

{
console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`);
}

handObject(user);
handObject({
    username:"richa tomar",
    age:21
})

const myArray =[200,400,100,600]

function returnSecondValue(getArray)
{
    return getArray[1];
}

console.log(returnSecondValue(myArray));
console.log(returnSecondValue(myNewArray));

