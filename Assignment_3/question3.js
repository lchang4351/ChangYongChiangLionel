const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09"
};

// Write your code below

const disneyDataInt = {
	open: parseFloat(disneyData.open),
	high: parseFloat(disneyData.high),
	low: parseFloat(disneyData.low),
	close: parseFloat(disneyData.close),
}

let result = disneyDataInt.open - disneyDataInt.high + disneyDataInt.low - disneyDataInt.close

result = result.toFixed(2)

// result = result.parseFloat(result).toFixed(2)

console.log(typeof(disneyData.open))
console.log(typeof(disneyDataInt.open))
console.log(result)

