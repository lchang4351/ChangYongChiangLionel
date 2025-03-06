const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
let sum = 0
for (let i=0; i<amdPrices.length; i++){
    sum += amdPrices[i]
}
let SMA = sum / amdPrices.length

let count = 0
for (let price of amdPrices){
    if (price > SMA){
        count += 1
    }
}

console.log("Number of days AMD was above the 7-day SMA is: " + count)