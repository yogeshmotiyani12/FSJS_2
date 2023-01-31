//Create a countries.js file and store the countries name into this file, 
// create a file web_techs.js and store the popular web technology names into this file. 
// Access both file in a third file named main.js


import { country_names } from "./countries.js";
import { latest_techs } from "./web_techs.js";

console.log(country_names);   // [ 'India', 'USA', 'China', 'Russia', 'Australia', 'Indonesia' ]
console.log(latest_techs);    // [ 'Angular', 'Vue', 'Go', 'React' ]