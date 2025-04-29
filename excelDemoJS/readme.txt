1. 00:21 - Can a JavaScript object hold a function as a property? Explain with an example.
Ja
let person = {
    firstname: "Tom",
    lastname: "Cook",
    fullname: function(){return this.firstname+' '+this.lastname}
}

2. 03:28 - What are anonymous functions in JavaScript? Define their syntax and implementation.

Klareres Beispiel einer wirklich "anonymen" Funktion:
(typisch z.B. in map() oder Eventhandlern)

const names = ["Otto", "Anna"];
names.map(function(name) {
  return '>>>' + name;
});

Hier hat die Funktion wirklich keinen Namen und lebt nur im map()-Aufruf.

3. 07:22 - What is the difference between var, const, and let? Explain with an example.

Achtung y=3 ==> ist gleich mit var y = 3
var is globally scoped and can be redeclared -> no error, sideeffects
let is not globally, in Blocks you can use the same variabel (block-scoped: multiple let x possible) and they are not mixed
const is block-scoped and not changeable

4. 16:26 - Where are the push, pop, slice, shift, and unshift methods used when accessing array elements?
unshift vorn hinzufügen 
shift vorn wegnehmen
[0,1,2,3,4,5].splice(2,2) => [2,3]
['A', 'B'].forEach((char, index)=>{
    console.log('Char: ' + char + ' at ' + index)
    })

5. 23:19 - Is JavaScript Asynchronous? Prove with an example.
Beispiel: undefined because variable is not set at this time (await)
console.log("1st log");    
console.log("2nd log");  
setTimeout(function(){
    console.log('3rd log')
}, 2000)
console.log('4th log')

6. 27:53 - What are callback functions in JavaScript?
   Meist bei async Methoden wird als Parameter eine Methode mitgegeben. Nach Ermittlung von Daten wird die Callback Methode ausgeführt. 
   Beispiel mit callback 
      function fetchdata(callback){
         let data = 'Text'
         callback(data)
      }
   Beispiel ohne callback (nicht flexible)   
      function fetchdata(){
         let data = 'Text'
         writeToBackup(data)
      }
7. 38:09 - What are promises in JavaScript? Explain the difference between callback functions and promises with an example.
//Beispiel volle Kontrolle 
function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(true)resolve("Data fetched")
            else reject("rejected")    
        }, 2000)
    })
}
fetchData().then(data=>{
    console.log("Processing; " + data)
})

//Beispiel mit async -> keine Kontrolle über resolve, reject
async function myFunction() {
    return "Hello";
}
myFunction().then(result => console.log(result)); 

8. 49:15 - Create an inheritance relationship between a parent and child class. Invoke the parent constructor from the child class. Create main.js to call parent class methods from a child class object.
9. 55:21 - From the above code, explain how the super and these keywords help achieve the solution.

class student extends Person {
   constructor(name, age, grade){
      super(name, age);
      this.grade = grade
   }
   getStudentDetails(){
      const personDetails = super.getDetails();
      return `${personDetails}, Grade: ${this.grade}`
   }
}


10. 01:00:05 - What is the difference between == and ===?

'0' == 0 -> true
'0' === 0 -> false

11. 01:03:32 - What is the difference between null and undefined in JavaScript?

null is an object, undefined type of undefined

12. 01:06:36 - A classic programming interview question that involves using array methods (filter, map, reduce), and JavaScript objects.