// 28. Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***
	
// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//  	   *****


//pattern 1 - Triangle Pattern

// let num = 3;
// // In javascript every console.log() is printed on a new line. So we will have to keep a string which we keep adding to. And then print it:
// let triangle_pattern = "";

// for (let i=1; i<=num; i++){   // for number of rows
//     for (let j=0; j<i; j++){  // for number of columns
//         triangle_pattern += "*";
//     }
//     triangle_pattern += "\n";
// }
// console.log(triangle_pattern);




// pattern2 - Square Pattern


// let num = 3;
// // In javascript every console.log() is printed on a new line. So we will have to keep a string which we keep adding to. And then print it:
// let sqr_pattern = "";

// for (let i=1; i<=num; i++){   // for number of rows
//     for (let j=0; j<num; j++){  // for number of columns
//         sqr_pattern += "*";
//     }
//     sqr_pattern += "\n";
// }
// console.log(sqr_pattern);


// pattern3 - Pyramid Pattern


let num = 3;
// In javascript every console.log() is printed on a new line. So we will have to keep a string which we keep adding to. And then print it:
let pyramid_pattern = "";

for (let i=1; i<=num; i++){ 
    //Loop for printing spaces
    for (let j=0; j<=num-i; j++){  
        pyramid_pattern += " ";
    }
    // printing star
    for (let k = 0; k < 2 * i - 1; k++) {
        pyramid_pattern += "*";
    }
    pyramid_pattern += "\n";
}
console.log(pyramid_pattern);

