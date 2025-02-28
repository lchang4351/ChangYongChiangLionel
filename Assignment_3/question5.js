const bacData = [190.15, 194.21, 191.07, 192.44, 129000];

// Write your code below

const Low = bacData[0]
const High = bacData[1]
const Open = bacData[2]
const Close = bacData[3]
const Volume = bacData[4]

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