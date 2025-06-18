function bmiCalculator(weight, height)
{
    return weight / (Math.pow(height, 2));
}

let weightUserInput = parseFloat(prompt("Whats your weight: "));
let heightUserInput = parseFloat(prompt("Whats your height: "));
const bmiUser = bmiCalculator(weightUserInput, heightUserInput);

if (bmiUser < 18.5)
{
    alert("Your BMI is " + bmiUser + ", so you are underweight.")
}
else if((bmiUser >= 18.5 && bmiUser < 25))
{
    alert("Your BMI is " + bmiUser + ", so you have a normal weight.")
}
else 
{
    alert("Your BMI is " + bmiUser + ", so you are overweight.")
}