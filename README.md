JavaScript Function Tutorial Welcome To Khans Programming!

1. Argument.JS
Explanation:
তোমার কোডটা বেশ ভালো প্র্যাকটিস করা হয়েছে 👍 এখন আমি পুরোটা line by line Bangla explanation করে দিচ্ছি — সহজভাবে বুঝার জন্য।
________________________________________
🔹 1. doubleIt Function
function doubleIt (number){
    const doubled = number * 2;
    console.log('The Number I Given To Multiply is: ',number,doubled);
}
ব্যাখ্যা:
•	function doubleIt(number) → এখানে একটা function বানানো হয়েছে, নাম doubleIt
•	number → এটা parameter (input value)
•	const doubled = number * 2;
👉 এখানে number কে 2 দিয়ে গুণ করা হচ্ছে
•	console.log(...)
👉 input number এবং result print করছে
________________________________________
🔹 Function Call করা
console.log('I Will call the function');
doubleIt(15);
ব্যাখ্যা:
•	আগে একটা message print হচ্ছে
•	তারপর doubleIt(15) → 15 কে 2 দিয়ে গুণ করবে
👉 Output:
The Number I Given To Multiply is: 15 30
________________________________________
doubleIt(88);
doubleIt(873);
👉 একই function বারবার different value দিয়ে call করা হচ্ছে
________________________________________
🔹 Variable দিয়ে Function Call
const number = 55;
doubleIt(number);
👉 এখানে variable number = 55
👉 তারপর function এ pass করা হয়েছে
________________________________________
❌ এখানে একটা ভুল আছে
const money_ = 112;
doubleIt(money);
সমস্যা:
•	তুমি declare করেছো money_
•	কিন্তু call করছো money
👉 তাই error হবে: money is not defined
✔ ঠিক হবে:
doubleIt(money_);
________________________________________
🔹 difference Function (1st Version)
function difference(num1,num2){
    const diff_num = num1 - num2;
    console.log(num1,num2,'Difference',diff_num);
}
ব্যাখ্যা:
•	দুইটা সংখ্যা নিচ্ছে (num1, num2)
•	subtract করছে (num1 - num2)
•	result print করছে
________________________________________
const father_age_ = 63;
const son_age_ = 27;

difference(father_age,son_age);
❌ সমস্যা:
•	তুমি declare করেছো father_age_ এবং son_age_
•	কিন্তু call করছো father_age এবং son_age
👉 error হবে: not defined
✔ ঠিক হবে:
difference(father_age_,son_age_);
________________________________________
🔹 নিজের Practice Function
function number_Multiply(number){
    const Multiply_Num = number * 2;
    console.log("Multiply By 2 is: ",Multiply_Num);
}
👉 আগের মতোই multiply function
________________________________________
number_Multiply(10);
const money = 100;
number_Multiply(money);
👉 10 এবং 100 কে 2 দিয়ে গুণ করছে
________________________________________
🔹 difference Function (2nd Version)
function difference(num1,num2){
    const diff_num_Add = num1 - num2;
    console.log("Difference of Two Given Numbers Are: ",diff_num_Add);
}
👉 আবার একই function redefine করা হয়েছে (আগেরটা override হয়ে গেছে)
________________________________________
const father_age = 63;
const son_age = 27;

const mother_age = 53;
const son_age_M = 27;
👉 এখানে নতুন variable declare করা হয়েছে
________________________________________
difference(father_age,son_age);
difference(mother_age,son_age_M);
👉 দুইটা call হচ্ছে:
•	father - son
•	mother - son
________________________________________
⚠️ গুরুত্বপূর্ণ বিষয়
1. Same Function Name Problem
তুমি দুইবার difference function লিখেছো
👉 JavaScript এ last টা কাজ করবে
________________________________________
2. Variable Naming Problem
money vs money_
father_age vs father_age_
👉 এগুলো mismatch হলে error হবে
________________________________________
✅ Clean Correct Version
function doubleIt(number){
    const doubled = number * 2;
    console.log('Number:', number, 'Double:', doubled);
}

doubleIt(15);
doubleIt(88);

const money = 112;
doubleIt(money);

function difference(num1, num2){
    const diff = num1 - num2;
    console.log('Difference:', diff);
}

const father_age = 63;
const son_age = 27;

difference(father_age, son_age);
________________________________________
🎯 Final Summary (সহজ ভাষায়)
•	Function = reusable code
•	Parameter = input
•	Argument = function call এর সময় দেওয়া value
•	Variable নাম match না করলে error হবে
•	Same function name বারবার লিখলে last টা কাজ করবে
________________________________________
2.Array-Operation.js
Explanation:
তোমার এই কোডটা খুব সুন্দর 👌 এখন আমি এটাকে line by line Bangla explanation করে দিচ্ছি, যাতে তুমি পুরোটা clear বুঝতে পারো।
________________________________________
🔹 Function Declaration
function sumOfArrayElements(numbers){
👉 এখানে তুমি একটা function বানিয়েছো
👉 function এর নাম: sumOfArrayElements
👉 numbers = parameter (এখানে array আসবে)
________________________________________
🔹 Sum Variable Initialize
let sum = 0;
👉 এখানে একটা variable sum নেওয়া হয়েছে
👉 শুরুতে value = 0
👉 এটা total যোগফল রাখবে
________________________________________
🔹 Loop Through Array
for(const number of numbers){
👉 এটা for...of loop
👉 array এর প্রতিটা element এক এক করে number variable এ আসবে
👉 Example:
[10,20,30,10,5] হলে loop চলবে এইভাবে:
•	number = 10
•	number = 20
•	number = 30
•	number = 10
•	number = 5
________________________________________
🔹 Print Each Element
console.log(number);
👉 প্রতিটা number console এ print হচ্ছে
________________________________________
🔹 Add Numbers
sum = sum + number;
👉 এখানে আসল কাজ হচ্ছে
Step by step:
•	sum = 0 + 10 = 10
•	sum = 10 + 20 = 30
•	sum = 30 + 30 = 60
•	sum = 60 + 10 = 70
•	sum = 70 + 5 = 75
👉 Final sum = 75
________________________________________
🔹 Return Result
return sum;
👉 function শেষে total sum return করছে
________________________________________
🔹 Array Declaration
const numbs = [10,20,30,10,5];
👉 এখানে একটা array নেওয়া হয়েছে
________________________________________
🔹 Function Call
sum = sumOfArrayElements(numbs);
👉 function call করা হয়েছে
👉 numbs array function এ পাঠানো হয়েছে
👉 return value sum এ রাখা হয়েছে
⚠️ এখানে একটা ছোট issue আছে 👇
তুমি sum variable declare করো নাই
✔ ভালো practice:
const sum = sumOfArrayElements(numbs);
________________________________________
🔹 Final Output
console.log("Sum of The Numbers Are: ",sum);
👉 Final result print করবে
👉 Output:
10
20
30
10
5
Sum of The Numbers Are: 75
________________________________________
⚠️ Important Tips
❌ Mistake:
sum = sumOfArrayElements(numbs);
👉 sum declare করা হয়নি
✅ Correct:
const sum = sumOfArrayElements(numbs);
________________________________________
🎯 সহজভাবে বুঝো
👉 Function কী করছে?
➡️ একটা array নিচ্ছে
➡️ loop দিয়ে সব number ঘুরছে
➡️ সবগুলো যোগ করছে
➡️ total return করছে
________________________________________
🔥 Real-Life Example
ধরো:
তোমার কাছে ৫টা টাকার নোট আছে:
•	10 টাকা
•	20 টাকা
•	30 টাকা
•	10 টাকা
•	5 টাকা
👉 তুমি এক এক করে যোগ করছো
👉 শেষে total = 75 টাকা
এই কাজটাই function করছে 😄
________________________________________
3.conditional_return.js
Explanation:
তোমার কোডটা খুব ভালো 👌 — এখন আমি এটা deep Bangla explanation + improvement সহ বুঝিয়ে দিচ্ছি।
________________________________________
🔹 1. isEven Function
function isEven(number){

    if(number % 2===0){
        return true;
    }
    else{
        return false;
    }
}
🧠 কী হচ্ছে এখানে?
•	number % 2 → number কে 2 দিয়ে ভাগ করলে remainder (ভাগশেষ) কত থাকে
•	যদি remainder = 0 হয় → তাহলে number Even (জোড় সংখ্যা)
👉 Example:
•	4 % 2 = 0 ✅ → Even
•	10 % 2 = 0 ✅ → Even
________________________________________
🔹 Output
console.log(isEven(4));
👉 Output:
true
________________________________________
🔹 2. isOdd Function
function isOdd(number){

    if(number % 2===1){
        return true;
    }
    else{
        return false;
    }
}
🧠 কী হচ্ছে?
•	যদি remainder = 1 হয় → তাহলে number Odd (বিজোড় সংখ্যা)
👉 Example:
•	5 % 2 = 1 ✅ → Odd
•	7 % 2 = 1 ✅ → Odd
________________________________________
🔹 Output
console.log(isOdd(5));
👉 Output:
true
________________________________________
⚠️ গুরুত্বপূর্ণ সমস্যা (Important Issue)
❗ Negative Number Problem
isOdd(-3)
👉 -3 % 2 = -1 (JavaScript এ)
👉 তখন:
-1 === 1 ❌ false
👉 কিন্তু -3 তো Odd!
❌ তাই তোমার function এখানে ভুল result দিবে
________________________________________
✅ Better Version (Correct Way)
function isOdd(number){
    return number % 2 !== 0;
}
👉 এখন:
•	5 → true
•	-3 → true ✅
________________________________________
🔥 Short & Smart Version
Even:
function isEven(number){
    return number % 2 === 0;
}
Odd:
function isOdd(number){
    return number % 2 !== 0;
}
👉 এখানে if-else দরকার নাই 😎
________________________________________
🎯 আরও Short (One Line Arrow Function)
const isEven = number => number % 2 === 0;
const isOdd = number => number % 2 !== 0;
________________________________________
🧾 Summary (সহজভাবে)
Condition	Meaning
number % 2 === 0	Even
number % 2 !== 0	Odd
________________________________________
🔥 Real-Life Example
👉 ধরো তুমি বন্ধুদের লাইন করালে:
•	2, 4, 6, 8 → জোড় (Even)
•	1, 3, 5, 7 → বিজোড় (Odd)
👉 “জোড়” মানে pair করা যায়
👉 “বিজোড়” মানে একজন extra থাকে 😄
________________________________________
4. convert.js
Explanation:
তোমার কোডটা খুবই practical 👌 — real life conversion problem solve করছো 🔥
এখন আমি এটাকে Bangla + deep explanation + improvement সহ বুঝিয়ে দিচ্ছি।
________________________________________
🔹 1. Inch → Feet Conversion
 
 
 
 
function inchToFeet(inch){
    const feet  = inch / 12;
    return feet;
}
🧠 কী হচ্ছে?
•	1 foot = 12 inches
•	তাই inch কে 12 দিয়ে ভাগ করলে feet পাওয়া যায়
👉 Example:
const myHeight = inchToFeet(71);
👉 হিসাব:
71 ÷ 12 = 5.9166 feet
👉 Output:
Height is: 5.9166
________________________________________
🔹 2. Miles → Kilometer Conversion
 
 
 
 
function milesToKM(mile){
    const mileTo_km = mile * 1.609344;
    return mileTo_km;
}
🧠 কী হচ্ছে?
•	1 mile = 1.609344 km
•	তাই mile × 1.609344 = kilometer
👉 Example:
const Calculate_Mile_To_KM = milesToKM(10);
👉 হিসাব:
10 × 1.609344 = 16.09344 km
👉 Output:
Miles Are: 16.09344
________________________________________
🔹 3. Kilometer → Miles Conversion
 
 
 
 
function kmToMiles(Kilometer){
    const Kilometer_To_Miles = Kilometer * 0.621371;
    return Kilometer_To_Miles;
}
🧠 কী হচ্ছে?
•	1 km = 0.621371 miles
•	তাই km × 0.621371 = miles
👉 Example:
const KilometerToMIles = kmToMiles(1);
👉 Output:
Kilometer Are: 0.621371
________________________________________
⚠️ ছোট ছোট Improvement
1. Variable naming clean করা
const kilometerToMiles = kmToMiles(1);
👉 CamelCase ব্যবহার করো (best practice)
________________________________________
2. Function Short করা
const inchToFeet = inch => inch / 12;
const milesToKM = mile => mile * 1.609344;
const kmToMiles = km => km * 0.621371;
________________________________________
3. Rounded Output (Professional Look)
const myHeight = inchToFeet(71).toFixed(2);
console.log("Height is:", myHeight);
👉 Output:
Height is: 5.92
________________________________________
🔥 Bonus (Real Useful Upgrade)
👉 Inch → Feet + Inch (Human Readable)
function inchToFeetAndInch(inch){
    const feet = Math.floor(inch / 12);
    const remainingInch = inch % 12;
    return feet + " ft " + remainingInch + " inch";
}

console.log(inchToFeetAndInch(71));
👉 Output:
5 ft 11 inch
________________________________________
🎯 Final Summary (সহজভাবে)
Conversion	Formula
Inch → Feet	÷ 12
Mile → KM	× 1.609344
KM → Mile	× 0.621371
________________________________________
5.even-only.js
Explanation:
তোমার কোডটা দারুণ 👌 — তুমি এখন filter + logic + sum একসাথে শিখছো 🔥
এখন আমি পুরোটা Bangla line-by-line + deep explanation করে দিচ্ছি।
________________________________________
🔹 1. evenNumbersOnly Function
function evenNumbersOnly(numbers){

    const evens = [];
🧠 কী হচ্ছে?
•	numbers → array input
•	evens → নতুন array (যেখানে শুধু even number রাখা হবে)
________________________________________
    for(const number of numbers){
👉 loop দিয়ে array এর প্রতিটা element নেওয়া হচ্ছে
________________________________________
        if(number % 2 === 0){
👉 check করা হচ্ছে number even কিনা
✔ Condition:
•	number % 2 === 0 → even
________________________________________
            console.log(number);
            evens.push(number);
👉 কাজ দুইটা:
1.	even number print করছে
2.	evens array তে add করছে
________________________________________
    return evens;
}
👉 শেষে শুধু even numbers return করছে
________________________________________
🔹 Function Call
const numbers = [3,2,1,5,2,4];

const Fun_evens = evenNumbersOnly(numbers);
👉 Input:
[3,2,1,5,2,4]
👉 Even numbers:
[2,2,4]
________________________________________
console.log("Even Numbers Are: ",Fun_evens);
👉 Output:
Even Numbers Are: [2,2,4]
________________________________________
🔹 2. sumofEvenNumber Function
function sumofEvenNumber(numbers){

    let sum = 0;
👉 sum variable total রাখবে
________________________________________
    for(const number of numbers){
👉 আবার loop
________________________________________
        if(number % 2 === 0){
👉 শুধু even number select করা হচ্ছে
________________________________________
            console.log(number);
            sum = sum + number;
👉 কাজ:
1.	even number print
2.	sum এ যোগ হচ্ছে
________________________________________
🔹 Step by Step Calculation
Array: [3,2,1,5,2,4]
•	2 → sum = 2
•	2 → sum = 4
•	4 → sum = 8
👉 Final sum = 8
________________________________________
    return sum;
}
________________________________________
const sum = sumofEvenNumber(numbers);

console.log("Sum of Even Number",sum);
👉 Output:
Sum of Even Number 8
________________________________________
⚠️ Important Note
👉 তুমি এখানে দুইবার console.log(number) করছো
→ এটা debugging এর জন্য ঠিক আছে
→ কিন্তু final code এ না রাখলেও চলে
________________________________________
🔥 Smart & Short Version (Professional)
✅ Only Even বের করা
const evens = numbers.filter(n => n % 2 === 0);
________________________________________
✅ Even Sum বের করা
const sum = numbers
    .filter(n => n % 2 === 0)
    .reduce((acc, n) => acc + n, 0);
________________________________________
🎯 Clean Version (Best Practice)
function getEvenNumbers(numbers){
    return numbers.filter(n => n % 2 === 0);
}

function sumEvenNumbers(numbers){
    return numbers
        .filter(n => n % 2 === 0)
        .reduce((sum, n) => sum + n, 0);
}
________________________________________
🧾 Summary (সহজভাবে)
👉 তোমার কোড ২টা কাজ করছে:
1️⃣ Even number বের করছে
➡️ [2,2,4]
2️⃣ Even number যোগ করছে
➡️ 8
________________________________________
🔥 Real-Life Example
ধরো:
তোমার কাছে কিছু টাকা আছে:
[3,2,1,5,2,4]
👉 তুমি শুধু even টাকা (জোড়) আলাদা করছো
👉 তারপর সবগুলো যোগ করছো
➡️ Even = [2,2,4]
➡️ Total = 8 টাকা 💰
________________________________________
6. function.js
Explanation:
তোমার কোডটা খুব সুন্দরভাবে function + real-life steps ব্যবহার করে লেখা 👍
এখন আমি পুরোটা Bangla explanation + concept clear করে দিচ্ছি।
________________________________________
🔹 1. Variable Declaration
const number = 45;
👉 এখানে একটা variable নেওয়া হয়েছে
👉 কিন্তু এই কোডে এটা ব্যবহার করা হয়নি (unused variable)
⚠️ Tip: ব্যবহার না করলে remove করাই ভালো
________________________________________
🔹 2. fanOffKor() Function
function fanOffKor(){

    console.log('Bosha Theke Uthe Dara');
    console.log('Walk Toward The Switch');
    console.log('Click The Switch to Off The Fan');

}
🧠 কী হচ্ছে?
👉 এটা একটা real-life instruction function
ধাপে ধাপে:
1.	বসা থেকে উঠো
2.	সুইচের দিকে যাও
3.	ফ্যান বন্ধ করো
👉 মানে function = instructions bundle
________________________________________
🔹 3. brushTeeth() Function
function brushTeeth(){

    console.log('Pick Up The Brush');
    console.log('Add Paste');
    console.log('2 min goso ar majho');

}
🧠 কী হচ্ছে?
👉 আরেকটা real-life function 😄
Steps:
1.	ব্রাশ ধরো
2.	পেস্ট লাগাও
3.	২ মিনিট ব্রাশ করো
________________________________________
🔹 4. Function Call
fanOffKor();
console.log('---------');
brushTeeth();
🧠 Execution Flow
👉 প্রথমে:
fanOffKor() run হবে
👉 তারপর:
---------
👉 তারপর:
brushTeeth() run হবে
________________________________________
🔹 5. Program_BD() Function
function Program_BD(){

    console.log("I am Doing Programming");
}
👉 simple function → শুধু একটা message print করে
________________________________________
Program_BD();
console.log("Hello");
👉 Output order:
I am Doing Programming
Hello
________________________________________
🔥 Final Output (সব মিলিয়ে)
Bosha Theke Uthe Dara
Walk Toward The Switch
Click The Switch to Off The Fan
---------
Pick Up The Brush
Add Paste
2 min goso ar majho
I am Doing Programming
Hello
________________________________________
🎯 Concept Clear (খুব গুরুত্বপূর্ণ)
✅ Function কী?
👉 Function = একসাথে কিছু instruction (code block)
________________________________________
✅ কেন function ব্যবহার করি?
•	code reuse করা যায়
•	code clean থাকে
•	real-life step easily represent করা যায়
________________________________________
🔥 Improvement Suggestion
1. Naming style (Best Practice)
function programBD(){
👉 CamelCase ব্যবহার করো
________________________________________
2. Meaningful function
function turnOffFan(){
👉 English name use করলে global standard হয়
________________________________________
🚀 Pro Version (Clean Code)
function turnOffFan(){
    console.log('Stand up');
    console.log('Go to switch');
    console.log('Turn off the fan');
}

function brushTeeth(){
    console.log('Take brush');
    console.log('Apply toothpaste');
    console.log('Brush for 2 minutes');
}

function doProgramming(){
    console.log('I am doing programming');
}

turnOffFan();
console.log('---------');
brushTeeth();
doProgramming();
console.log('Hello');
________________________________________
🔥 Real-Life Understanding
👉 Function = recipe 🍳
যেমন:
•	fanOffKor() = ফ্যান বন্ধ করার recipe
•	brushTeeth() = দাঁত ব্রাশ করার recipe
👉 call করলে recipe execute হয়
________________________________________
7. leapyear.js
Explanation:
তুমি এখানে দুইটা function দিয়ে Leap Year check করেছো 👌
এখন আমি এটা deep Bangla explanation + rule clear + best version করে দিচ্ছি।
________________________________________
🔹 Leap Year কী? (Concept)
👉 Leap Year মানে সেই বছর যেখানে February = 29 দিন
👉 মোট দিন = 366
________________________________________
🔹 1st Function (Basic Version)
function isLeapYear(year){

    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}
🧠 কী হচ্ছে?
👉 Rule:
•	year % 4 === 0 → Leap Year
👉 Example:
•	2052 % 4 = 0 ✅ → Leap Year
________________________________________
⚠️ Problem
👉 এই logic পুরা সঠিক না
❌ Example:
•	1900 → divisible by 4 ✔
কিন্তু leap year না ❌
👉 তাই এই function incomplete
________________________________________
🔹 2nd Function (Correct Version)
function isLeapYear1(year){

    if(year % 100 !==0 && year % 4 === 0){
           return true;
    }
    else if(year % 100 === 0 && year % 400 ===0){
        return true;
    }
    else{
        return false;
    }
}
________________________________________
🧠 Full Rule (Important)
👉 Leap Year হবে যদি:
✅ Rule 1:
•	divisible by 4
•	BUT NOT divisible by 100
👉 Example:
•	2024 ✅
•	2052 ✅
________________________________________
✅ Rule 2:
•	divisible by 100 AND divisible by 400
👉 Example:
•	2000 ✅
________________________________________
❌ Not Leap Year:
•	divisible by 100 but NOT 400
👉 Example:
•	1900 ❌
________________________________________
🔹 তোমার Output
const isYearLeap1 = isLeapYear1(2052);
👉 2052 → divisible by 4 and not 100
👉 তাই result:
Leap Year 2052 is: true
________________________________________
🔥 Simplified & Smart Version
👉 একই logic short করে লেখা যায়:
function isLeapYear(year){
    return (year % 4 === 0 && year % 100 !== 0) 
        || (year % 400 === 0);
}
👉 No if-else needed 😎
________________________________________
🔥 Even Shorter (Arrow Function)
const isLeapYear = year => 
    (year % 4 === 0 && year % 100 !== 0) 
    || (year % 400 === 0);
________________________________________
🎯 Test Example
console.log(isLeapYear(2024)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true
________________________________________
🧾 Summary Table
Year	Result
2024	✅ Leap
2052	✅ Leap
1900	❌ Not Leap
2000	✅ Leap
________________________________________
🔥 Real-Life Trick (Easy মনে রাখার জন্য)
👉 3-step rule:
1.	4 দিয়ে ভাগ যায়?
2.	100 দিয়ে ভাগ গেলে reject ❌
3.	কিন্তু 400 দিয়ে ভাগ গেলে accept ✅
________________________________________
8. parameter.js
Explanation:
তোমার কোডটা খুব ভালো practice 👍—এখানে তুমি function reuse, parameter, calculation সবই ব্যবহার করছো।
এখন আমি এটাকে deep Bangla explanation + mistake + clean version সহ বুঝিয়ে দিচ্ছি।
________________________________________
🔹 1. vaatKhao() Function
function vaatKhao(){

    console.log('hand Wash Kore aso');
    console.log('boso');
    console.log('plate e khabar dhabar nao');
    console.log('gopat gopat kore khao');

}
🧠 ব্যাখ্যা:
👉 এটা একটা instruction function (real-life steps)
👉 কিন্তু তুমি এটা call করো নাই (comment করা)
// vaatKhao();
👉 তাই এটা run হচ্ছে না
________________________________________
🔹 2. square(number) Function (1st Version)
function square(number){

    console.log('Value of The Number Parameter',number);
    const borgo = number*number;
    console.log('Square of the given number is: ',borgo);
}
🧠 কী হচ্ছে?
•	number → input
•	number * number → square
•	result print হচ্ছে
________________________________________
🔹 Call
square(4);
square(5);
square(12);
square(405);
👉 Output example:
Value of The Number Parameter 4
Square of the given number is: 16
________________________________________
🔹 3. add(num1, num2)
function add(num1,num2){

    const sum = num1 + num2;
    console.log('Sum Of The Number is: ',sum);
}
👉 দুইটা number যোগ করছে
add(5,71);  // 76
add(65,31); // 96
________________________________________
🔹 4. addAll(a,b,c,d,e)
function addAll(a,b,c,d,e){

    const sum = a+b+c+d+e;
    console.log("Sum of The All Numbers Are: ",sum);
}
👉 ৫টা number একসাথে যোগ করছে
addAll(10,20,30,40,50);
👉 Output:
150
________________________________________
⚠️ বড় সমস্যা (Important Issue)
❌ Function Overwriting
তুমি আবার square function লিখেছো:
function square(number){

    const square_num = number*number;
    console.log("Square Of The Numbers Are: ",square_num);
}
👉 এর মানে:
•	আগের square function delete হয়ে গেছে ❌
•	নতুনটাই কাজ করবে ✅
________________________________________
🔹 New square Calls
square(4);
square(8);
square(16);
👉 এখন শুধু new version run হবে
________________________________________
🔹 5. sum(num1, num2)
function sum(num1,num2){

    const sum_num = num1 + num2;
    console.log("Sum of The Two Numbers Are: ",sum_num);
}
👉 এটা আবার add() এর মতোই
👉 Duplicate function ❌
________________________________________
⚠️ Summary of Problems
❌ Same function name multiple times
❌ Duplicate logic (add vs sum)
❌ Unused function (vaatKhao)
❌ Code repetition
________________________________________
✅ Clean & Professional Version
function eatMeal(){
    console.log('Wash hands');
    console.log('Sit down');
    console.log('Take food');
    console.log('Eat properly');
}

function square(number){
    return number * number;
}

function add(num1, num2){
    return num1 + num2;
}

function addAll(...numbers){
    return numbers.reduce((sum, n) => sum + n, 0);
}

// Calls
console.log(square(4));
console.log(square(8));

console.log(add(10,20));

console.log(addAll(10,20,30,40,50));
________________________________________
🔥 Advanced Concept (Important)
✅ ...numbers (Rest Parameter)
👉 unlimited numbers নিতে পারো:
addAll(1,2,3,4,5,6,7,8);
________________________________________
🎯 Concept Clear
Concept	Meaning
Function	reusable code
Parameter	input
Return	output
Overwrite	same name → last one works
________________________________________
🔥 Real-Life Example
👉 square() = কোনো কিছুর area বের করা
👉 add() = টাকা যোগ করা
👉 addAll() = সব খরচ একসাথে হিসাব করা 💰
________________________________________
9. recap.js
Explanation:
তোমার এই কোডে তুমি return ব্যবহার করে clean function লিখেছো 👍—এটা খুবই ভালো practice।
এখন আমি পুরোটা Bangla deep explanation + math breakdown + improvement সহ বুঝিয়ে দিচ্ছি।
________________________________________
🔹 1. add(price1, price2)
function add(price1,price2){

    const total = price1 + price2;
    return total;
}
🧠 কী হচ্ছে?
•	price1 + price2 → দুইটা দাম যোগ করছে
•	return total → result function এর বাইরে পাঠাচ্ছে
________________________________________
🔹 Call
const bill = add(5,80);
console.log("Rice Bill: ",bill);
👉 হিসাব:
5 + 80 = 85
👉 Output:
Rice Bill: 85
________________________________________
🔹 2. addAll(price1, price2)
function addAll(price1,price2){
    return price1 + price2;
}
🧠 কী হচ্ছে?
👉 আগের function এর short version
👉 extra variable লাগে নাই
________________________________________
const bill_price = addAll(90,5);
👉 হিসাব:
90 + 5 = 95
👉 Output:
Rice Bill2: 95
________________________________________
🔹 3. doMath(num1, num2)
function doMath(num1,num2){

    const sum = num1 + num2;
    const diff = num1 - num2;
    const multiply = sum * diff;
    const result = multiply/2;

    return result;
}
________________________________________
🧠 Step by Step Breakdown
👉 Input:
doMath(10,5)
________________________________________
Step 1: Sum
10 + 5 = 15
Step 2: Difference
10 - 5 = 5
Step 3: Multiply
15 × 5 = 75
Step 4: Divide
75 ÷ 2 = 37.5
________________________________________
🔹 Final Output
const result = doMath(10,5);
console.log(result);
👉 Output:
37.5
________________________________________
🔥 Mathematical Insight (Pro Level)
👉 তোমার formula আসলে এটা:
[
\frac{(a+b)(a-b)}{2}
]
👉 যা simplify করলে হয়:
[
\frac{a^2 - b^2}{2}
]
👉 মানে তুমি indirectly difference of squares ব্যবহার করছো 😎
________________________________________
⚠️ Important Concept
✅ return vs console.log
return	console.log
value ফেরত দেয়	শুধু print করে
variable এ store করা যায়	store করা যায় না
👉 Example:
const x = add(5,5); // works
const x = console.log(5+5); // undefined ❌
________________________________________
🔥 Clean & Advanced Version
const add = (a,b) => a + b;

const doMath = (a,b) => ((a + b) * (a - b)) / 2;

console.log(add(5,80));
console.log(doMath(10,5));
________________________________________
🎯 Summary (সহজভাবে)
👉 তোমার কোড ৩টা কাজ করছে:
1.	➕ দুইটা সংখ্যা যোগ করা
2.	➕ short version add
3.	🧮 math formula calculation
________________________________________
🔥 Real-Life Example
👉 add() → বাজারের হিসাব 🛒
👉 doMath() → complex calculation (engineering / problem solving)
________________________________________
10. return.js
Explanation:
তোমার কোডটা একদম clear 👍—এখানে তুমি function + return + calculation সুন্দরভাবে ব্যবহার করেছো।
এখন আমি এটাকে Bangla deep explanation + clean practice + tips দিয়ে বুঝাচ্ছি।
________________________________________
🔹 1. tenTimes(number)
function tenTimes(number){

    const number_big = number * 10;
    return number_big;
}
🧠 কী হচ্ছে?
•	number → input
•	number * 10 → ১০ গুণ করা হচ্ছে
•	return → result বাইরে পাঠাচ্ছে
________________________________________
🔹 Call
const number_multiply = tenTimes(5);
console.log("Output is Given: ",number_multiply);
👉 হিসাব:
5 × 10 = 50
👉 Output:
Output is Given: 50
________________________________________
🔹 2. cutHalf(number)
function cutHalf(number){

    const Cut_Half = number / 2;
    return Cut_Half;
}
🧠 কী হচ্ছে?
•	number / 2 → অর্ধেক করা হচ্ছে
•	result return করছে
________________________________________
🔹 Call
const number_big = cutHalf(10);
console.log("Divison Are: ",number_big);
👉 হিসাব:
10 ÷ 2 = 5
👉 Output:
Divison Are: 5
________________________________________
⚠️ ছোট Improvement
❌ Variable naming issue
const number_big = cutHalf(10);
👉 আগে তুমি number_big ব্যবহার করেছিলে অন্য কাজে
👉 reuse করলে confusion হয়
________________________________________
✅ Better naming
const halfNumber = cutHalf(10);
________________________________________
🔥 Clean Version
function tenTimes(number){
    return number * 10;
}

function cutHalf(number){
    return number / 2;
}

const multiplied = tenTimes(5);
console.log("Output:", multiplied);

const half = cutHalf(10);
console.log("Half:", half);
________________________________________
🔥 Arrow Function Version (Pro)
const tenTimes = num => num * 10;
const cutHalf = num => num / 2;

console.log(tenTimes(5));
console.log(cutHalf(10));
________________________________________
🎯 Important Concept
✅ Return Flow
👉 function → return → variable → print
const result = tenTimes(5);
console.log(result);
________________________________________
🔥 Bonus Idea (Combine Function)
👉 একটার output আরেকটায় ব্যবহার:
const result = cutHalf(tenTimes(5));
console.log(result);
👉 হিসাব:
5 × 10 = 50
50 ÷ 2 = 25
👉 Output:
25
________________________________________
🎯 Summary (সহজভাবে)
Function	কাজ
tenTimes	১০ গুণ
cutHalf	অর্ধেক
________________________________________
11. various.params.js
Explanation:
তোমার কোডটা এখন অনেক mature 👌 — এখানে তুমি string, boolean logic, object, array—সব একসাথে practice করছো 🔥
এখন আমি পুরোটা deep Bangla explanation + improvement + best practice দিয়ে বুঝিয়ে দিচ্ছি।
________________________________________
🔹 1. stringcheck(str)
function stringcheck(str){

    const check_str = str;
    const size = str.length;
    console.log(str,size);

    if(size % 2 === 0){
        console.log("Even Size");
    }
    else{
        console.log("Odd Size");
    }
}
🧠 কী হচ্ছে?
•	str.length → string এর length বের করছে
•	even হলে → "Even Size"
•	odd হলে → "Odd Size"
________________________________________
🔹 Call
stringcheck('Hello');
stringcheck('Bye');
👉 "Hello" → length = 5 → Odd
👉 "Bye" → length = 3 → Odd
👉 Output:
Hello 5
Odd Size
Bye 3
Odd Size
________________________________________
⚠️ Improvement
const check_str = str;
👉 এই line unnecessary ❌ (ব্যবহারই করো নাই)
________________________________________
🔹 2. doubleOrTripleCheck(number, double)
function doubleOrTripleCheck(number,double){

    if(double === true){
        const num = number * 2;
        return num;
    }
    else{
        const num = number * 3;
        return num;
    }
}
🧠 কী হচ্ছে?
👉 boolean দিয়ে decision নিচ্ছে
•	true → double
•	false → triple
________________________________________
🔹 Call
console.log(doubleOrTripleCheck(5,true));  // 10
console.log(doubleOrTripleCheck(5,false)); // 15
________________________________________
🔥 Short Version
const doubleOrTripleCheck = (num, isDouble) =>
    isDouble ? num * 2 : num * 3;
👉 clean + professional 😎
________________________________________
🔹 3. getAge(person)
function getAge(person){

    const age = person.age;
    return age;
}
🧠 কী হচ্ছে?
👉 object থেকে property বের করছে
________________________________________
🔹 Example
const person = {name: "Rahim", age: 25};

console.log(getAge(person)); // 25
________________________________________
🔹 4. ArrayofElements(number)
function ArrayofElements(number){

    const number_Size = number.length;
    return number_Size;
}
🧠 কী হচ্ছে?
👉 array এর length return করছে
________________________________________
🔹 Call
ArrayofElements([1,2,3,4,5,6,7,8,9,10,11,12]);
👉 Output হবে: 12
❗ কিন্তু তুমি print করো নাই
________________________________________
✅ Correct way
console.log(ArrayofElements([1,2,3]));
________________________________________
⚠️ Important Issues
❌ Naming problem
function ArrayofElements(number)
👉 number actually array 😅
✅ Better:
function getArrayLength(arr)
________________________________________
🔥 Clean & Professional Version
function stringCheck(str){
    const size = str.length;
    console.log(str, size, size % 2 === 0 ? "Even" : "Odd");
}

const doubleOrTriple = (num, isDouble) =>
    isDouble ? num * 2 : num * 3;

const getAge = person => person.age;

const getArrayLength = arr => arr.length;

// Test
stringCheck("Hello");
console.log(doubleOrTriple(5,true));
console.log(getAge({name: "Rahim", age: 25}));
console.log(getArrayLength([1,2,3,4]));
________________________________________
🎯 Concept Summary
Concept	Example
String length	"Hello".length
Boolean logic	true / false
Object access	person.age
Array length	arr.length
________________________________________
🔥 Real-Life Understanding
👉 stringcheck() → নামের length check
👉 doubleOrTripleCheck() → offer system (double / triple 😄)
👉 getAge() → user info থেকে age নেওয়া
👉 ArrayofElements() → কয়টা item আছে count করা
________________________________________
🚀 Next Level

Team Need For Competitive Programming Contact Samin’s Big Brother! Details Given Below:
Contact: 01867598806/01973110772
WhatsApp/WeChat

Credit Goes To FrontEnd Developer Learner:
MD Tamim Rahman Khan(Zaman)!

Running Learning Team:
1.Muntasir Rahman Khan
2.Tajbir Mayas Partho
3.MD Samin Chowdhury
4.MD Shamim Hossain
5.MD Udoy Hossain
