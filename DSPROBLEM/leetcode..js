// 1710
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);
    let result = 0;
    for (const [ boxes, units ] of boxTypes) {
      const takeBoxes = Math.min(boxes, truckSize);
      result += units * takeBoxes;
      truckSize -= takeBoxes;
      if (!truckSize) break;
    }
    return result;
  };
var  boxTypes = [[5,10],[2,5],[4,7],[3,9]]
var truckSize = 10
console.log(maximumUnits(boxTypes,truckSize));