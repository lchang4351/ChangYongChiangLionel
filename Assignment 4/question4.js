const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

// Write your code below

sumClose = 0
for (let i = 0; i < msftData.length; i++){
	sumClose += msftData[i][3]
	// console.log(sumClose)
}


let averageClose = sumClose / msftData.length
averageClose = averageClose.toFixed(2)

console.log("Average closing price of MSFT is " + averageClose)
