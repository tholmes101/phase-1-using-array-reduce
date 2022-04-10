const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const start = 0;
const totalBatteries = batteryBatches.reduce((previous, current) => previous + current, start);