// Modify the code below:

const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]

let data = []

const sortedAmdPrices = amdPrices.sort(function(a, b){return a-b})

for (let i = 0; i<3; i++){
    data.push(sortedAmdPrices[i])
}

// console.log(data)
console.log("The three lowest prices are " + data[0] + ", " + data[1] + ", and " + data[2])