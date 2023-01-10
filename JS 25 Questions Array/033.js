/* 33. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
- The same groups apply to both men and women.
- Underweight: BMI is less than 18.5
- Normal weight: BMI is 18.5 to 24.9
- Overweight: BMI is 25 to 29.9
- Obese: BMI is 30 or more */

// we need user weight in KG, height in meter

let myWeight = 70;
let myHeight = 1.7;

function bmi(weight, height) {
    let myBmi = weight / (height * height);
    return myBmi;
}

console.log(`Your BMI is: ${bmi(myWeight, myHeight)}`);

let myBmi = bmi(myWeight, myHeight);

if (myBmi < 18.5) {
    console.log(`UNDERWIGHT - Your BMI is: ${myBmi}`);
} else if (myBmi <= 24.9 && myBmi >= 18.5) {
    console.log(`NORMAL - Your BMI is: ${myBmi}`);
} else if (myBmi >= 25 && myBmi <= 29.9) {
    console.log(`OVERWEIGHT - Your BMI is: ${myBmi}`);
} else if (myBmi > 30) {
    console.log(`OBESE - Your BMI is: ${myBmi}`);
}
