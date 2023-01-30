// Write a program which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-79, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F


function gradings(score){
    if(score >=80 && score <=100){
        return 'Your grade is A';
    }
    else if(score >=80 && score <=100){
        return 'Your grade is B';
    }
    else if(score >=70 && score <=79){
        return 'Your grade is C';
    }
    else if(score >=60 && score <=69){
        return 'Your grade is D';
    }
    else if(score >=50 && score <=59){
        return 'Your grade is F';
    }
    else{
        return 'Invalid Input or marks are not in the range of grading.'
    }
}

let sub_score = gradings(65);
console.log(sub_score);

// let sub_score1 = gradings('A');
// console.log(sub_score1);