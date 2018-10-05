/*
B = Berry
C = Citrus
W = Regular Water
CO = Coconut
*/
var water = [
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

var exampleArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log(exampleArr);

// This new array will contain all duplicates of old array.
var duplicateArr = [];

// This function will delete the 13th element in the array
function splice(array) {
    var arr = [];
    // This pushes the 13th element of the array into arr
    arr.push(array[12]);

    for (var i in array) {
        // Checks for all duplicate values in array
        var index = array.indexOf(arr[0]);
        
        if (index !== -1) {
            // Splices all duplicates with value index (which is arr[0])
            array.splice(index, 1);
        }
    }
};

// This function adds duplicates to array
function duplicate(arr) {
    var createDuplicate = arr.concat(
        // This will add all but the last element of the array
        arr.slice(0, -1),
        // This adds the last element of the array
        arr.slice(arr.length - 1, arr.length)
    );

    createDuplicate.forEach(
        // Add each item to this new array
        item => duplicateArr.push(item)
    );

    // duplicateArr now contains array #1 and its duplicate
    // i.e. arr1 = [1, 2]; newArr = [1, 2, 1, 2];
    console.log(duplicateArr);

    // The array starts to get too big (which means the browser takes 
    // too long to run the functions), so we remove the elements in the
    // array from duplicateArr[250] on to the end of the array.
    if (duplicateArr.length > 250) {
        duplicateArr.splice(250, duplicateArr.length)
    }
}

// If you would like to see the function run with the 
// example, replace "water" with "exampleArr":


// Duplicates the array for the first time
duplicate(water);
// After running this function, the 13th element is removed.
splice(duplicateArr);

// This removes what started as the first element.
duplicate(duplicateArr);
splice(duplicateArr);

// This removes the 3rd element.
duplicate(duplicateArr);
splice(duplicateArr);

// This removes the 5th element.
duplicate(duplicateArr);
splice(duplicateArr);

// This removes the 7th element.
duplicate(duplicateArr);
splice(duplicateArr);

// This removes the 9th element.
duplicate(duplicateArr);
splice(duplicateArr);

// This removes the 11th element.
duplicate(duplicateArr);
splice(duplicateArr);

// This removes the 2nd element.
duplicate(duplicateArr);
splice(duplicateArr);

// This removes the 8th element.
duplicate(duplicateArr);
splice(duplicateArr);

// This removes the 4th element.
duplicate(duplicateArr);
splice(duplicateArr);

// This removes the 6th element.
duplicate(duplicateArr);
splice(duplicateArr);

// This removes the 10th element.
duplicate(duplicateArr);
splice(duplicateArr);

// The last element in the array is now what originally started as the 12th element.
// This means that if you want your coconut sparkling water, you must always start 
// counting 2 sparkling waters after the one you want.
console.log(duplicateArr);
