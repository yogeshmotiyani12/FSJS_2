// Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included).

even_arr = []
odd_arr = []


for(let num=0; num<=100; num ++){
    if (num % 2 == 1){
        odd_arr.push(num)
    }
    else{
        even_arr.push(num)
    }
}

console.log(even_arr);
console.log(odd_arr);
