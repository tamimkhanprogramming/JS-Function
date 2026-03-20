function evenNumbersOnly(numbers){

    const evens = [];

    for(const number of numbers){
        if(number % 2 === 0){
            console.log(number);
            evens.push(number);
        }
        
    }
    return evens;

    
}

const numbers = [3,2,1,5,2,4];

const Fun_evens = evenNumbersOnly(numbers);

console.log("Even Numbers Are: ",Fun_evens);


function sumofEvenNumber(numbers){

    let sum = 0;

    for(const number of numbers){

        if(number % 2 === 0){

            console.log(number);

            sum = sum + number;
        }

        
    }
    return sum;
}

const sum = sumofEvenNumber(numbers);

console.log("Sum of Even Number",sum);
