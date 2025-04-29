const greet = function(name){ return '>>>'+name }
console.log(greet('Otto'))

console.log([0,1,2,3,4,5].splice(2,2));

['A', 'B'].forEach((char, index)=>{
    console.log('Char: ' + char + ' at ' + index)
    })

console.log("1st log");    
console.log("2nd log");  
setTimeout(function(){
    console.log('3rd log')
}, 2000)
console.log('4th log')