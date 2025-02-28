const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09",
	volume: "90000"
};

// Write your code below

const Low = disneyData.low
const High = disneyData.high
const Open = disneyData.open
const Close = disneyData.close
const Volume = disneyData.volume

if (Close > Open){
    if (Volume > 100000){
        console.log("Strong Bullish")
    }
    
    else{
        console.log("Bullish")
    }

}
    
if (Close < Open){
    if (Volume > 10000){
        console.log("Strong Bullish")
    }
    
    else{
        console.log("Bullish")
    }
}


if (Close === Open){
    console.log("Neutral")
}

