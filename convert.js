// //  Calculate Height //

function inchToFeet(inch){

    const feet  = inch / 12;

    return feet;
}

const myHeight = inchToFeet(71);

console.log("Height is: ",myHeight);

// Calculate Miles To KM

function milesToKM(mile){

    const mileTo_km = mile * 1.609344;
    return mileTo_km;
}

const Calculate_Mile_To_KM = milesToKM(10);

console.log("Miles Are: ",Calculate_Mile_To_KM);

// Kilometer To Miles Formula

 function kmToMiles(Kilometer){

    const Kilometer_To_Miles = Kilometer * 0.621371;

    return Kilometer_To_Miles;
 }

 const KilometerToMIles = kmToMiles(1);

 console.log("Kilometer Are: ",KilometerToMIles);