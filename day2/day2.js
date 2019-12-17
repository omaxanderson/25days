const POSITION_MODE  = 0;
const IMMEDIATE_MODE = 1;

const a = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,10,19,1,9,19,23,1,13,23,27,1,5,27,31,2,31,6,35,1,35,5,39,1,9,39,43,1,43,5,47,1,47,5,51,2,10,51,55,1,5,55,59,1,59,5,63,2,63,9,67,1,67,5,71,2,9,71,75,1,75,5,79,1,10,79,83,1,83,10,87,1,10,87,91,1,6,91,95,2,95,6,99,2,99,9,103,1,103,6,107,1,13,107,111,1,13,111,115,2,115,9,119,1,119,6,123,2,9,123,127,1,127,5,131,1,131,5,135,1,135,5,139,2,10,139,143,2,143,10,147,1,147,5,151,1,151,2,155,1,155,13,0,99,2,14,0,0];

const add = (arr, idx, mode) => {
    const sum = arr[arr[idx + 1]] + arr[arr[idx + 2]];
    const storeIdx = arr[idx + 3];
    arr[storeIdx] = sum;
    return true;
};

const multiply = (arr, idx, mode) => {
    const product = arr[arr[idx + 1]] * arr[arr[idx + 2]];
    const storeIdx = arr[idx + 3];
    arr[storeIdx] = product;
    return true;
};

const store = (arr, idx, value, mode) => {
    const address = arr[idx + 1];
    arr[address] = value;
    return true;
};

const output = (arr, idx, mode) => {
    const value = arr[idx + 1];
    console.log(value);
    return true;
};

const halt = () => {
    return false;
};

const computer = {
    1: add,
    2: multiply,
    3: store,
    4: output,
    99: halt,
};

const performOperation = (arr, idx, mode) => {
    const funk = computer[arr[idx]];
    return funk(arr, idx, mode);
    /*
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
     */
};

a[1] = 12;
a[2] = 2;

const mode = POSITION_MODE;

let i = 0;
while (performOperation(a, i, mode)) {
    i += 4;
}

console.log(a[0]);

/*
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
 */
