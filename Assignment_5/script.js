const p = Promise.resolve('World');



p.then(result =>{
    return new Promise(resolve => setTimeout(() => resolve('Hello ' + result), 1000))
})
.then(finalValue => {
    console.log(finalValue)
})
