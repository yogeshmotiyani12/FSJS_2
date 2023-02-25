
let myheros = ["Spiderman", "Batman"]


// adding a property inside prototype yoges(this can be anything) so that whoever inherit this objects gets the property

// this is going to be arrays prototype prototype or prototype chaining or we can say prototype inheitance 

// this way we can chain the one prototype with other and so on 
Object.prototype.yogesh = function(){
    console.log("Hello there");
}

myheros.yogesh()