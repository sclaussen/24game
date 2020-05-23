'use strict'


var attemptedCombinations = {};
var solutions = [];


main(process.argv);


function main(args) {
    let numbers = process.args.splice(2);
    if (numbers.length !== 4) {
        console.log('Please pass in the four numbers for the game!');
        process.exit(1);
    }

    game(numbers);
}


function game(numbers) {
    for (let index1 of [ 0, 1, 2, 3 ]) {
        let index2 = parseInt(index1 + 1);
        while (index2 <= 3) {
            let arrayIndex = [ 0, 1, 2, 3];
            arrayIndex.splice(index1, 1);
            arrayIndex.splice((index2 - 1), 1);
            let index3 = arrayIndex[0];
            let index4 = arrayIndex[1];

            tryCombination(parseInt(numbers[index1]), parseInt(numbers[index2]), parseInt(numbers[index3]), parseInt(numbers[index4]));
            tryCombination(parseInt(numbers[index1]), parseInt(numbers[index2]), parseInt(numbers[index4]), parseInt(numbers[index3]));
            tryCombination(parseInt(numbers[index2]), parseInt(numbers[index1]), parseInt(numbers[index3]), parseInt(numbers[index4]));
            tryCombination(parseInt(numbers[index2]), parseInt(numbers[index1]), parseInt(numbers[index4]), parseInt(numbers[index3]));

            index2++;
        }
    }

    console.log(solutions);
}


function tryCombination(number1, number2, number3, number4) {

    let combination = number1 + ' ' + number2 + ' ' + number3 + ' ' + number4;
    if (attemptedCombinations[combination]) {
        return;
    }
    attemptedCombinations[combination] = {};


    for (let operator1 of [ '+', '-', '*', '/' ]) {
        for (let operator2 of [ '+', '-', '*', '/' ]) {
            for (let operator3 of [ '+', '-', '*', '/' ]) {
                let answer = calculate(number1, operator1, number2, operator2, number3, operator3, number4);
                if (answer === 24) {
                    solutions.push(number1 + ' ' + operator1 + ' ' + number2 + ' ' + operator2 + ' ' + number3 + ' ' + operator3 + ' ' + number4 + ' = ' + answer);
                }
            }
        }
    }
}


function calculate(number1, operator1, number2, operator2, number3, operator3, number4) {
    let answer = evaluate(number1, operator1, number2);
    answer = evaluate(answer, operator2, number3);
    answer = evaluate(answer, operator3, number4);
    return answer;
}


function evaluate(n1, op, n2) {
    switch (op) {
    case '+':
        return n1 + n2;
    case '-':
        return n1 - n2;
    case '*':
        return n1 * n2;
    case '/':
        return n1 / n2;
    }
}
