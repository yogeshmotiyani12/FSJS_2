// The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// Sort the array and find the min and max age

let age_sort = ages.sort();

let min_age = Math.min(age_sort[0]);
console.log(min_age); // 19

let max_age = Math.max(age_sort[ages.length - 1]);
console.log(max_age); // 26

// Find the median age(one middle item or two middle items divided by two)

let median_age = (age_sort[age_sort.length/2] + age_sort[(age_sort.length/2) - 1]) / 2;
console.log(median_age); //24

// Find the average age(all items divided by number of items)

let sum = 0;

age_sort.forEach(age_details => { sum+= age_details});

let avg_age  = sum/age_sort.length;
console.log(avg_age); //22.8

// Find the range of the ages(max minus min)

let age_range  = max_age - min_age

console.log(age_range); // 7

// Compare the value of (min - average) and (max - average), use abs() method
     
let min_avg = Math.abs(min_age - avg_age);
console.log(min_avg); // 3.8000000000000007
let max_avg = Math.abs(max_age - avg_age);
console.log(max_avg); // 3.1999999999999993

if (min_avg > max_avg){
    console.log("min_avg is greater than max_avg")
}
else if (min_avg < max_avg){
    console.log("max_avg is greater than min_avg")
}
else{
    console.log('Both are equal')
}