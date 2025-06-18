let firstName = prompt("Pls enter the first Name: ");
let secondName = prompt("Pls enter the second Name: ");

let randomLoveNumber = Math.random();
let result = ((randomLoveNumber*100));

if (result < 25)
{
    alert(firstName + " and " + secondName + " eure Liebe ist nicht stark mit " + result);
}
else if (result < 50)
{
    alert(firstName + " and " + secondName + " eure Liebe ist normal mit " + result);
}
else
{
    alert(firstName + " and " + secondName + " eure Liebe ist stark mit " + result);
}
