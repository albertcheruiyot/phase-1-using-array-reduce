const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

var totalBatteries;

totalBatteries = batteryBatches.reduce((accumulator, innitialValue) => {
  return accumulator + innitialValue;
}, 0);
console.log(totalBatteries);
