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

