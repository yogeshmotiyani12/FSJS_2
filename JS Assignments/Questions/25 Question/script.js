// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. 
// BMI is used to broadly define different weight groups in adults 20 years old or older.
// Check if a person is underweight, normal, overweight or obese based the information given below.
//     - The same groups apply to both men and women.
//     - Underweight: BMI is less than 18.5
//     - Normal weight: BMI is 18.5 to 24.9
//     - Overweight: BMI is 25 to 29.9
//     - Obese: BMI is 30 or more


function calcBMI (height, weight){
    let check_bmi = (weight/(height*height/10000))
    console.log(`BMI is ${check_bmi}`);
    if (check_bmi < 18.5){
        console.log("Your are underweight as per the BMI.");
    }else if(check_bmi >= 18.5 && check_bmi <= 24.9){
        console.log("Normal weight as per the BMI");
    }else if(check_bmi >= 25 && check_bmi <= 29.9){
        console.log("Overweight as per the BMI.");
    }else if(check_bmi > 30){
        console.log("Obese as per the BMI.");
    }
}

const Pheight = 40;
const Pweight = 1.5;
calcBMI(Pheight, Pweight);