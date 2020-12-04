console.log("hola pendejo");

const newSection = (section) =>{
    console.log(`******************${section} SECTION******************`);
}
/**
 * The following section is about variables
 */
newSection("VARIABLES");
 // variable that can be changed
 let myName = "julio";
 console.log(myName);
myName = "bryan";
console.log(myName);
// variable that cannot be changed
const yourName = "Flaco";
console.log(yourName);



/**
 * The following sections is about functions
 */
// this is the default way to creat functions
newSection("FUNCTIONS");
 function myFunc(){
     console.log("This is myFunc");
 }
// this is how you invoke a js functions
 myFunc();

 const myModernFunc = () =>{
     console.log("This is a modern way of creating funcs");
 }

 myModernFunc();

 const myModernFuncWithParams = (name, age) =>{
     console.log(`This is a func with params name:${name} and age:${age}`);
 }
 myModernFuncWithParams("julio", 27);

/**
 * The following section is about looping
 */
newSection("LOOPS");
let loading = 0;

const names = ["julio", "cassie", "bryan", "darks"];
// this is a js for each loop
for (name of names){
    if(name === "julio"){
        console.log("Heyyyy it's julioooooo");
    }else{
        console.log(name);
    }
}
// this is a js while loop
while(loading < 100){
    console.info("Still loading...");
    loading++;
}

console.info("Done loading...")