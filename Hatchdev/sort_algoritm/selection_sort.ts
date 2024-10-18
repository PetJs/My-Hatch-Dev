function selectionSort(array: number[]){
    for (let i = 0; i < array.length -1; i++){
        let idxMin = i;
        for(let j = i + 1; j < array.length; j++){
            if (array[j] < array[idxMin]){
                idxMin = j;
            }
        }
        if(idxMin !== i){
            const current = array[idxMin];
            array[idxMin] = array[i];
            array[i] = current;
        } 
    }return array;
}

console.log(selectionSort([1, 3, 5, 4, 7, 6]));