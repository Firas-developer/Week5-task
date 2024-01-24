let arr = [1,2,3,4,5,1,6,2,7,1,3];
 
function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));