const codes = {
    1: 'add',
    2: 'multiply',
    99: 'end',
};

const a = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,10,19,1,9,19,23,1,13,23,27,1,5,27,31,2,31,6,35,1,35,5,39,1,9,39,43,1,43,5,47,1,47,5,51,2,10,51,55,1,5,55,59,1,59,5,63,2,63,9,67,1,67,5,71,2,9,71,75,1,75,5,79,1,10,79,83,1,83,10,87,1,10,87,91,1,6,91,95,2,95,6,99,2,99,9,103,1,103,6,107,1,13,107,111,1,13,111,115,2,115,9,119,1,119,6,123,2,9,123,127,1,127,5,131,1,131,5,135,1,135,5,139,2,10,139,143,2,143,10,147,1,147,5,151,1,151,2,155,1,155,13,0,99,2,14,0,0];

const add = (arr, idx) => {
    const sum = arr[arr[idx + 1]] + arr[arr[idx + 2]];
    const storeIdx = arr[idx + 3];
    arr[storeIdx] = sum;
};

const multiply = (arr, idx) => {
    const product = arr[arr[idx + 1]] * arr[arr[idx + 2]];
    const storeIdx = arr[idx + 3];
    arr[storeIdx] = product;
};

const performOperation = (arr, idx) => {
    if (arr[idx] === 1) {
        add(arr, idx);
        return true;
    } else if (arr[idx] === 2) {
        multiply(arr, idx);
        return true;
    } else if (arr[idx] === 99) {
        return false;
    }
    return false;
};

for (let i = 0; i <= 99; i++) {
    for (let j = 0; j <= 99; j++) {
        const arrCopy = [...a];
        arrCopy[1] = i;
        arrCopy[2] = j;
        let idx = 0;
        while (arrCopy[idx] !== 99) {
            performOperation(arrCopy, idx);
            idx += 4;
        }

        if (arrCopy[0] === 19690720) {
            console.log('i', i);
            console.log('j', j);
            console.log(100 * i + j);
            console.log(JSON.stringify(arrCopy));
            break;
        }
        //console.log(JSON.stringify(a));
    }
}

