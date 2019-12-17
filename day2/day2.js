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

const getModes = (num) => {
    const modes = [];
    while (num !== 0) {
        modes.push(num % 10);
        num = Math.floor(num / 10);
    }
    while (modes.length < 3) {
        modes.push(0);
    }
    return modes;
};

console.log(getModes(10));
console.log(getModes(11));
console.log(getModes(1));
console.log(getModes(0));
console.log(getModes(110));
console.log(getModes(100));
console.log(getModes(111));
console.log(getModes(110));

const performOperation = (arr, idx, mode) => {
    // first get the opt code
    const code = arr[idx];
    const optCode = code % 100;
    const parameterMode = Math.floor(code / 100);
    const modes =


        mode = POSITION_MODE;
    const funk = computer[arr[idx]];
    return funk(arr, idx, mode);
};

const test1 = [1102, 4, 3, 4, 33];

/*
let i = 0;
while (performOperation(a, i)) {
    i += 4;
}

console.log(a[0]);
 */
