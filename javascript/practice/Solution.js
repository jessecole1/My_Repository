/*
    given 2 arrays of numbers, return a list of numbers that are present in arr_2, but not in arr_1.

*/

gatherMissingNumbers = (arr_1, arr_2) => {
    const arr_3 = [];
    for (var i = 0; i < arr_1.length; i++) {
        for (var j = 0; j < arr_2.length; j++) {
            if (arr_1[i] != arr_2[j]) {
                arr_3.push(arr_2[j]);
            }
            if (arr_1[i] == arr_2[j]) {
                arr_3.pop(arr_2[j]);
            }
        }
        console.log(arr_3);
        return arr_3;
    }
}


console.log(gatherMissingNumbers([1,2,3], [2,4,6]) === [4,6] ? 'pass' : 'fail'); // has some missing
// console.log(gatherMissingNumbers([1,2,3], [1,2,3]) === [] ? 'pass' : 'fail'); // has no missing
// console.log(gatherMissingNumbers([1,2,3], [4,5,6]) === [4,5,6] ? 'pass' : 'fail'); // has all missing