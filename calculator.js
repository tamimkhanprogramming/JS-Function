function add(num1,num2){

    return num1 + num2;
}
function subtract(num1,num2){

    return num1 - num2;
}
function multiply(num1,num2){

    return num1 * num2;
}
function divide(num1,num2){

    return num1 / num2;
}

function calculator(a,b,operation){

    if(operation ==='add'){

        return add(a,b);

    }
    else if(operation ==='subtract'){

        return subtract(a,b);

    }
     else if(operation ==='multiply'){

        return multiply(a,b);

    }
    else if(operation ==='divide'){

        return divide(a,b);

    }
    else{

        return('Error');
    }
}


const result_1 = calculator(5,7,'add');
const result_2 = calculator(5,7,'subtract');
const result_3 = calculator(5,7,'multiply');
const result_4 = calculator(5,7,'divide');

console.log(result_1,result_2,result_3,result_4);