//Distance function for 3D map

function distancePy(x2, x1, y2, y1, z2, z1){
    const unitOfMeasure = "Kilometers";

    const distance = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2 + (z2 - z1)**2);

    return `${distance.toFixed(2)} ${unitOfMeasure}`;
}
console.log(distancePy(7.65, 3.22, 1.78, 5.65, 5.22, 250));
