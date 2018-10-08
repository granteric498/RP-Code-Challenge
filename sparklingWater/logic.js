/*
B = Berry
C = Citrus
W = Regular Water
CO = Coconut
*/
const water = [
    "B2",
    "B3",
    "B4",
    "C1",
    "C2",
    "C3",
    "C4",
    "W1",
    "W2",
    "W3",
    "W4",
    "CO",
    "B1",
];

console.log(water);

const exampleArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// console.log(exampleArr);

// This new array will contain all duplicates of old array.
const duplicateArr = [];

// This function will delete the 13th element in the array
const splice = (array) => {
    const arr = [];
    // This pushes the 13th element of the array into arr
    arr.push(array[12]);

    for (let i in array) {
        // Checks for all duplicate values in array
        const index = array.indexOf(arr[0]);

        if (index !== -1) {
            // Splices all duplicates with value index (which is arr[0])
            array.splice(index, 1);
        }
    }
};

// This function adds duplicates to array
const duplicate = (arr) => {
    const createDuplicate = arr.concat(
        // This will add all but the last element of the array
        arr.slice(0, -1),
        // This adds the last element of the array
        arr.slice(arr.length - 1, arr.length)
    );

    createDuplicate.forEach(
        // Add each item to this new array
        item => duplicateArr.push(item)
    );

    // The array starts to get too big (which means the browser takes 
    // too long to run the functions), so we remove the elements in the
    // array from duplicateArr[250] on to the end of the array.
    if (duplicateArr.length > 250) {
        duplicateArr.splice(250, duplicateArr.length)
    }

    // duplicateArr now contains array #1 and its duplicate
    // i.e. arr1 = [1, 2]; newArr = [1, 2, 1, 2];
    console.log(duplicateArr);

    // After duplicating the array, run the splice function as a callback
    // function which will remove the 13th element in the array.
    splice(duplicateArr);
}

// If you would like to see the function run with the 
// example, replace "water" with "exampleArr":

// Duplicates the array for the first time
duplicate(water);
// After running this function, the 13th element is removed.

// This removes what started as the first element.
duplicate(duplicateArr);

// This removes the 3rd element.
duplicate(duplicateArr);

// This removes the 5th element.
duplicate(duplicateArr);

// This removes the 7th element.
duplicate(duplicateArr);

// This removes the 9th element.
duplicate(duplicateArr);

// This removes the 11th element.
duplicate(duplicateArr);

// This removes the 2nd element.
duplicate(duplicateArr);

// This removes the 8th element.
duplicate(duplicateArr);

// This removes the 4th element.
duplicate(duplicateArr);

// This removes the 6th element.
duplicate(duplicateArr);

// This removes the 10th element.
duplicate(duplicateArr);

// The last element in the array is now what originally started as the 12th element.
// This means that if you want your coconut sparkling water, you must always start 
// counting 2 sparkling waters after the one you want.

// Display only the first element of the array since the entire array has the
// 12th element.
console.log(duplicateArr[0]);