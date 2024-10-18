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


















function bubblle(arr: number[]){
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }return arr;
}

console.log(bubblle([2, 5, 1, 4, 9, 0]))

