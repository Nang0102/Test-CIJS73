export const TestA=()=>{
    return(
        <div>
            let adjacentElementsProduct = (inputArray) =>{
    let len = inputArray.length;
    let max = -Infinity;
    for(let i = 0; i < len - 1; i++){
        let largets = inputArray[i] * inputArray[i+1];
        if(max < largets) max = largets;
    }
    return max;
}

        </div>
    )
}