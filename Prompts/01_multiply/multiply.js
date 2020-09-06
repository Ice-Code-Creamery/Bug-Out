// This stretch requires you to write your own test cases

const multiply = (num1, num2) => {
    if(typeof(num1) =='number' && typeof(num2)=='number') {
        return num1 * num2;
    }
    else {
        return 'input is not a number'
    }
};

module.exports = { multiply };
