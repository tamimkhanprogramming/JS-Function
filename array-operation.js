 function sumOfArrayElements(numbers){

    let sum = 0;

    for(const number of numbers){

        console.log(number);

        sum = sum + number;
    }

    return sum;
 }

 const numbs = [10,20,30,10,5];

 sum = sumOfArrayElements(numbs);

 console.log("Sum of The Numbers Are: ",sum);