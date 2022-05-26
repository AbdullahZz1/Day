/*
    Given an array arr1 and array arr2, merge both arrays and return one array
    const arr1 = ["a", "b", "c"]
    const arr2 = ["c", "e", "f"]
    
    const expectedOutput = ["a", "b", "c", "c", "e", "f"] 
*/
const arr1 = ["a", "b", "c"]
const arr2 = ["c", "e", "f"]

function merge(arr1, arr2) {
    var arr3 = [];
    var NewArr=arr1;
    arr3 = NewArr.concat(arr2)
    return arr3
}
console.log(merge(arr1, arr2))