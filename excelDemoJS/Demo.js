const Person = require('./Demo2.js')

let person = {
    firstname: "Tom",
    lastname: "Cook",
    fullname: function(){return this.firstname+' '+this.lastname}
}

console.log(person.fullname())

for (let key in person) {
    let existProp = typeof(person[key])
    if(existProp==='function'){
        console.log(person[key]())
    } else {
        console.log(person[key])
    }
    
    
}

let p = new Person('Max', 'Muster')
let p1 = new Person('Tim', 'Cook')
//p1.location = 'turky' sic read only
console.log(p.fullname())
p.age=44
console.log(p1.age)
console.log(p1.location)