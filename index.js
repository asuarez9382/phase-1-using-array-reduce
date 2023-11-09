const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const initialValue = 0;


// Code your solution here
const totalBatteries = batteryBatches.reduce((accumulator, currentValue)=>
    accumulator + currentValue,
initialValue,
);


console.log(totalBatteries);