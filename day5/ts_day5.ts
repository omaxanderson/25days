const POSITION_MODE  = 0;
const IMMEDIATE_MODE = 1;

//const INPUT = 8;

const a = [3,225,1,225,6,6,1100,1,238,225,104,0,1102,68,5,225,1101,71,12,225,1,117,166,224,1001,224,-100,224,4,224,102,8,223,223,101,2,224,224,1,223,224,223,1001,66,36,224,101,-87,224,224,4,224,102,8,223,223,101,2,224,224,1,223,224,223,1101,26,51,225,1102,11,61,224,1001,224,-671,224,4,224,1002,223,8,223,1001,224,5,224,1,223,224,223,1101,59,77,224,101,-136,224,224,4,224,1002,223,8,223,1001,224,1,224,1,223,224,223,1101,11,36,225,1102,31,16,225,102,24,217,224,1001,224,-1656,224,4,224,102,8,223,223,1001,224,1,224,1,224,223,223,101,60,169,224,1001,224,-147,224,4,224,102,8,223,223,101,2,224,224,1,223,224,223,1102,38,69,225,1101,87,42,225,2,17,14,224,101,-355,224,224,4,224,102,8,223,223,1001,224,2,224,1,224,223,223,1002,113,89,224,101,-979,224,224,4,224,1002,223,8,223,1001,224,7,224,1,224,223,223,1102,69,59,225,4,223,99,0,0,0,677,0,0,0,0,0,0,0,0,0,0,0,1105,0,99999,1105,227,247,1105,1,99999,1005,227,99999,1005,0,256,1105,1,99999,1106,227,99999,1106,0,265,1105,1,99999,1006,0,99999,1006,227,274,1105,1,99999,1105,1,280,1105,1,99999,1,225,225,225,1101,294,0,0,105,1,0,1105,1,99999,1106,0,300,1105,1,99999,1,225,225,225,1101,314,0,0,106,0,0,1105,1,99999,7,677,677,224,1002,223,2,223,1006,224,329,1001,223,1,223,1007,226,226,224,1002,223,2,223,1006,224,344,1001,223,1,223,1108,226,677,224,102,2,223,223,1005,224,359,1001,223,1,223,1107,226,677,224,1002,223,2,223,1006,224,374,101,1,223,223,1107,677,226,224,1002,223,2,223,1006,224,389,101,1,223,223,7,226,677,224,1002,223,2,223,1005,224,404,101,1,223,223,1008,677,226,224,102,2,223,223,1005,224,419,101,1,223,223,1008,226,226,224,102,2,223,223,1006,224,434,101,1,223,223,107,226,226,224,1002,223,2,223,1005,224,449,1001,223,1,223,108,226,677,224,102,2,223,223,1005,224,464,101,1,223,223,1108,677,226,224,102,2,223,223,1005,224,479,101,1,223,223,1007,226,677,224,102,2,223,223,1006,224,494,101,1,223,223,107,677,677,224,102,2,223,223,1005,224,509,101,1,223,223,108,677,677,224,102,2,223,223,1006,224,524,1001,223,1,223,8,226,677,224,102,2,223,223,1005,224,539,101,1,223,223,107,677,226,224,102,2,223,223,1005,224,554,1001,223,1,223,8,226,226,224,102,2,223,223,1006,224,569,1001,223,1,223,7,677,226,224,1002,223,2,223,1005,224,584,1001,223,1,223,1108,226,226,224,102,2,223,223,1005,224,599,1001,223,1,223,1107,677,677,224,1002,223,2,223,1006,224,614,1001,223,1,223,1007,677,677,224,1002,223,2,223,1006,224,629,1001,223,1,223,108,226,226,224,102,2,223,223,1005,224,644,1001,223,1,223,8,677,226,224,1002,223,2,223,1005,224,659,1001,223,1,223,1008,677,677,224,1002,223,2,223,1006,224,674,1001,223,1,223,4,223,99,226];

const getValue = (arr, idx, mode) => {
    return mode === IMMEDIATE_MODE ? arr[idx] : arr[arr[idx]];
};

const add = (arr, idx, ...modes) => {
    const value0 = getValue(arr, idx + 1, modes[0]);
    const value1 = getValue(arr, idx + 2, modes[1]);
    const sum = value0 + value1;

    // storage idx is ALWAYS in position mode
    const storeIdx = arr[idx + 3];
    arr[storeIdx] = sum;
    return idx + 4;
};

const multiply = (arr, idx, ...modes) => {
    const value0 = getValue(arr, idx + 1, modes[0]);
    const value1 = getValue(arr, idx + 2, modes[1]);
    const product = value0 * value1;

    // storage idx always in position mode
    const storeIdx = arr[idx + 3];
    arr[storeIdx] = product;
    return idx + 4;
};

const store = (arr, idx, ...modes) => {
    // address idx is always position mode
    const address = getValue(arr, idx + 1, IMMEDIATE_MODE);
    //const value = getValue(arr, idx + 2, modes[1]);
    arr[address] = INPUT;
    return idx + 2;
};

const output = (arr, idx, ...modes) => {
    const value = getValue(arr, idx + 1, modes[0]);
    console.log(value);
    return idx + 2;
};

const jumpIfTrue = (arr, idx, ...modes) => {
    const value0 = getValue(arr, idx + 1, modes[0]);
    const value1 = getValue(arr, idx + 2, modes[1]);

    if (value0 !== 0) {
        return value1;
    }
    return idx + 3;
};

const jumpIfFalse = (arr, idx, ...modes) => {
    const value0 = getValue(arr, idx + 1, modes[0]);
    const value1 = getValue(arr, idx + 2, modes[1]);

    if (value0 === 0) {
        return value1;
    }
    return idx + 3;
};

const lessThan = (arr, idx, ...modes) => {
    const value0 = getValue(arr, idx + 1, modes[0]);
    const value1 = getValue(arr, idx + 2, modes[1]);
    const value2 = getValue(arr, idx + 3, IMMEDIATE_MODE);


    arr[value2] = value0 < value1 ? 1 : 0;
    return idx + 4;
};

const equals = (arr, idx, ...modes) => {
    const value0 = getValue(arr, idx + 1, modes[0]);
    const value1 = getValue(arr, idx + 2, modes[1]);
    const value2 = getValue(arr, idx + 3, IMMEDIATE_MODE);

    arr[value2] = value0 === value1 ? 1 : 0;
    return idx + 4;
};

const halt = () => {
    return false;
};

const computer = {
    1: add,
    2: multiply,
    3: store,
    4: output,
    5: jumpIfTrue,
    6: jumpIfFalse,
    7: lessThan,
    8: equals,
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

const performOperation = (arr, idx): number | boolean => {
    // first get the opt code
    const code = arr[idx];
    const optCode = code % 100;
    const parameterMode = Math.floor(code / 100);
    const modes = getModes(parameterMode);

    const funk = computer[optCode];
    return funk(arr, idx, ...modes);
};

const test1 = [3,9,8,9,10,9,4,9,99,-1,8];
const test2 = [3,9,7,9,10,9,4,9,99,-1,8];
const test3 = [3,3,1108,-1,8,3,4,3,99];
const test4 = [3,3,1107,-1,8,3,4,3,99];

const test5 = [3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9];
const test6 = [3,3,1105,-1,9,1101,0,0,12,4,12,99,1];

const test7 = [3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,
    1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,
    999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99];

const INPUT = 5;

const arrayToTest = a;

let instructionPointer: number | boolean = 0;
while (true) {
    instructionPointer = performOperation(arrayToTest, instructionPointer);
    // if increment is 0, then we're halting
    if (instructionPointer === false) {
        break;
    }
}

//console.log(a);

/*
a[1] = 12;
a[2] = 2;
while (performOperation(a, i)) {
    i += 4;
}

console.log(a[0] === 3765464);
 */
