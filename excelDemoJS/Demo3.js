let expenses = [2, 22, 14, 16, 8]
console.log('Sum: ' + expenses.reduce((sum, expense)=>sum+expense, 0))
console.log('Min: ' + expenses.sort((a,b)=> a-b)[0])
console.log('Max: ' + expenses.sort((a,b)=> a-b).reverse()[0])

let studentsNames = ['Max', 'Moriz', 'Lisl', 'Lotte']
studentsNames.unshift('TomCat')
console.log('starts with TomCat: ' + studentsNames )
studentsNames.pop()
console.log('ends with Lisl: ' + studentsNames) 
console.log('sorted: ' + studentsNames.sort())

let productPrices = [22, 223, 141, 160, 50]
let discountedPrices = productPrices.map(p=>(p*0.9).toFixed(2))
console.log('Discount Prices: ' + discountedPrices)
let affordableProducts = discountedPrices.filter(p => parseFloat(p) < 50 )
console.log('Affordable Products: ' + affordableProducts )
console.log('Sum of affordable Products: ' + affordableProducts.reduce((sum, p) => sum + parseFloat(p), 0.))