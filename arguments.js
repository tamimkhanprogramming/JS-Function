function doubleIt (number){

    const doubled = number * 2;
    console.log('The Number I Given To Multiply is: ',number,doubled);
}

console.log('I Will call the function');
doubleIt(15);
console.log('-------');
doubleIt(88);
console.log('-------');
doubleIt(873);

const number = 55;
doubleIt(number);

const money = 112;
doubleIt(money);

function difference(num1,num2){
    const diff_num = num1 - num2;

    console.log(num1,num2,'Difference',diff_num);
}

const father_age = 63;

const son_age = 27;

difference(father_age,son_age);

