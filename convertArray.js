
function convertArray(arr1, arr2) {

    let arr = []

    for(let i=0 ; i< arr1.length ; i++) {
        for(let j = 0 ; j < arr2.length; j++) {
            if(i === j) {
                arr.push([arr1[i],arr2[j]])
            }
            
        }
    }

    return arr;

};



module.exports = convertArray;