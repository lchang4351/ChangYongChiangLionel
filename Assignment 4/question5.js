const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];

// Write your code below
// console.log(typeof(disneyData[0]["close"]))


let sumClose = 0

for (let i=0; i<disneyData.length; i++){
	sumClose += parseFloat(disneyData[i]["close"]);
	// console.log(sumClose)
}

let averageClose = sumClose / disneyData.length
averageClose = Math.round(averageClose * 100)/100;
// console.log(averageClose)

console.log("Average closing price of Disney is " + averageClose)

