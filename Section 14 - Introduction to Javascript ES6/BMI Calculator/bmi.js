function bmiCalculator(weight, height)
{
    return weight / (Math.pow(height, 2));
}

alert("Dein BMI ist: " + bmiCalculator(60, 1.80));