const arr = [1,2,3,4,5,6,1]

function findDuplicate(arr){
    let dupe = arr.find((k,i) => arr.indexOf(k) !==i)
}

findDuplicate(arr)