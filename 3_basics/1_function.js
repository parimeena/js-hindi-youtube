function writeMyName()
{
    console.log("P");
    console.log("A");
    console.log("R");
    console.log("I");
}
//reference
//writeMyName
//execution
writeMyName();

function addTwoNumbers(number1, number2)
{
   return number1+number2;
}

console.log(addTwoNumbers(22,34));
 

function loginUserMessage(username)
{
    if(!username)
    {
        return `${username} is not valid username .Please enter a valid username`;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage());
