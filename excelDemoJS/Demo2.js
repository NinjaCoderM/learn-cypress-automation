module.exports = 
class Person{
    age = 25
    get location() { return 'canada'}
    constructor(firstname, lastname){
        this.firstname = firstname
        this.lastname = lastname
    }
    fullname(){ return this.firstname + ' ' + this.lastname}
}

/*
let p = new Person('Max', 'Muster')
let p1 = new Person('Tim', 'Cook')
//p1.location = 'turky' sic read only
console.log(p.fullname())
p.age=44
console.log(p1.age)
console.log(p1.location)
*/