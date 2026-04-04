function woodQuantity(chairQuantity,tableQuantity,BedQuantity){

    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const allChairWood = chairQuantity * perChairWood;

    const allTableWood = tableQuantity * perTableWood;

    const allBedWood = BedQuantity * perBedWood;

    const totalWood = allChairWood + allTableWood + allBedWood;
   
    return totalWood;
}

const wood = woodQuantity(0,0,4);

console.log('Wood Needed',wood);