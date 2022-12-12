function calculator (str){
    let local1 = parseInt(str.slice(0, 1)); 
    let local2 = str.slice (2, 3);
    let local3 = parseInt(str.substring (4, 5));
    if (local2 == '+'){
        return local1 + local3;
    } else if (local2 == '-'){
        return local1 - local3;
    }
}

function fibonachi (number){
    let first = 0;
    let second = 1;
    let result = '';


    for (let i = 0; i < number; i ++){

    }
}

function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
            // Без пробела в конце
        } else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }

    return result;
}

function fibonachi (number){
    let result = '';
    let first = 0;
    let second = 1; 

    for (let i = 0; i < number; i ++){
        if (i + 1 === number){
            result += `${number};`
        } else {
            result += `${number}`;
        }
    }
}