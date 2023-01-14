const { Console } = require("console");
const fs = require("fs");

const lines = fs
.readFileSync("input.txt", {encoding: "utf-8"})
.split("\n")
.map((x) => parseInt(x));

var calories = 0;
var arrCalories = [];

console.log(lines);

for (i=0; i <= lines.length; i++) {
    
    if (lines[i] > 0) {
        
        calories += lines[i];
    } else {
        arrCalories.push(calories);
        var calories = 0;
    }
};

const maxThree = [];

var j = 0;

while (j < 3) {
    var max = Math.max(...arrCalories);
    maxThree.push(max);
    var index = (arrCalories.indexOf(max));
    arrCalories.splice(index, 1); 
    j++;
}

console.log(maxThree[0] + maxThree[1] + maxThree[2]);