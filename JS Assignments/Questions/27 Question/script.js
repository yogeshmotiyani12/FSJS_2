// Write a program to print all the prime number between 0 to 100 (0 and 100 included).


function is_prime_num(num){

    if (num < 2){
        return false;
    }
    for(let i = 2; i < num/2; i++)
    {
        if (num%i === 0){
                return false;
            }
    }
    return true;
}
let N = 100;
for(let i = 0; i <= N; i++){
    if(is_prime_num(i)) {
        console.log(i);
    }
}
