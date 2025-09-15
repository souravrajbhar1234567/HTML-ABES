const car ={
    brand:"mahindra",
    model:"xuv 700",
    year:2021
}


function changeModel(obj){
    obj.model="suv";
}
changeModel(car)
console.log(car.brand);
console.log(car.model);
