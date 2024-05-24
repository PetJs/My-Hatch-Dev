// const scores = [1,2,4,5,7];


/* function linearSearch(input: number[], target: number): number{
    for(let i = 0; i <= input.length; i++){
        const currentElement = input[i];
        if(currentElement == target){
            return i;
        }
        console.log(input.length)
    }
    return -1;
} */

// const idx = linearSearch(scores, target);
// console.log(idx);

const sorted_scores = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const target = 70;
type  Result = {
    idx: number;
    numOfIter: number
}

function binary_search(input: number[], target: number): Result {
    let high = input.length - 1;
    let low = 0;
    let mid;

    for (let i = 0; i < input.length; i++){
        mid = Math.floor((high + low) / 2);
        const midElement = input[mid];
        if (midElement == target){
            return {numOfIter: i+1, idx: midElement} ;
        } else if (midElement < target){
            low = mid + 1;
        }else if (midElement > target){
            high = mid - 1;
        }

    }return {numOfIter: -1, idx: -1}
}


const binarySearch = binary_search(sorted_scores, target);
console.log("Binary Search:", binarySearch);