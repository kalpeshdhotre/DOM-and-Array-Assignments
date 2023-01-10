/* 27. The following is an array of 10 students ages:
    => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    - Sort the array and find the min and max age
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use abs() method */

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25];

// - Sort the array and find the min and max age
let sortedArray = ages.sort();
console.log(sortedArray);
console.log(`Minimum age in given array is: ${sortedArray[0]}`);
console.log(`Maximum age in given array is: ${sortedArray[sortedArray.length - 1]}`);

//    - Find the median age(one middle item or two middle items divided by two)
// check if array has even no of items or odd no of items

if (sortedArray.length % 2 == 0) {
    console.log("Array has Even no of elements");
    let median = (sortedArray[sortedArray.length / 2] + sortedArray[sortedArray.length / 2 + 1]) / 2;
    console.log(`Median of array is ${median}`);
} else {
    console.log("Array has odd no of elements");
    console.log(`Median of array is ${sortedArray[Math.ceil(sortedArray.length / 2)] / 2}`);
}

// - Find the average age(all items divided by number of items)
let sumOfAllElements = 0;

ages.forEach(addElements);

function addElements(item) {
    sumOfAllElements += item;
}
ageAverage = sumOfAllElements / ages.length;
console.log(`Average of all elements in array is ${ageAverage}`);

// - Find the range of the ages(max minus min)

console.log(`Range of ages is: ${ages[ages.length - 1] - ages[0]}`);

// - Compare the value of (min - average) and (max - average), use abs() method

function minAverage(min, max, average) {
    console.log(Math.abs(sortedArray[0] - ageAverage));
    console.log(Math.abs(sortedArray[sortedArray.length - 1]) - ageAverage);
}
minAverage();
