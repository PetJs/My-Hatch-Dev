
function bubble(Array: number[]){
    let swapped;
    do {
        swapped = false;
        for(let j = 0; j < Array.length -  1; j++){
            if (Array[j] > Array[j + 1] ){
                [Array[j], Array[j + 1]] = [Array[j + 1], Array[j]];
                swapped = true;
            }
        }
    }while (swapped)
    return Array;
}

const sort = [2, 1, 4, 3, 8, 5, 9, 7, 6]
console.log(bubble(sort));