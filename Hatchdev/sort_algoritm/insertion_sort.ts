function insertion(array: number[]){
    for(let i = 1; i < array.length; i ++){
        let current;
        current = array[i];
        let j = i - 1;
        while( j >= 0 && array[j] > current ){
            array[j + 1] = array[j];
            j --;
        } 
        array[j + 1] = current;
    } 
    return array;
}

console.log(insertion([2, 3, 5, 4, 1]));
