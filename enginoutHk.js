function engineoutHk() {
    //Creech AFB desired highkey altitude in AGL (never changes at Creech)
    const highKey = 2600;

    //time aircraft will take to reach control point (input needed by user)
    let timeToCpinMinutes = 8;

    //current aircraft vertical velocity inidicator reading (input needed by user)
    let verticalVelocityIndicator = 1000;

    //current aircraft altitude in AGL (input needed by user)
    let currentAltidudeAGL = 11500;

    //calculate anticipated energy lost
    let energyLost = timeToCpinMinutes * verticalVelocityIndicator;

    //subtracts predicted altitude lost from current altitude, this is the altitude you will reach the field at in AGL
    let altitudeAtField = currentAltidudeAGL - energyLost;
    console.log("Aircraft arriving at " + altitudeAtField + " ft AGL");

    //calculate difference between arrival altitude and high key altitude
    let differenceAltitude = altitudeAtField - highKey;

    //If else statement letting user know whether they are high or low
    if (altitudeAtField > highKey) {
        console.log("Aircraft is " + differenceAltitude + " ft high");
        return differenceAltitude
    } else if (altitudeAtField < highKey) {
        console.log("Aircraft is " + Math.abs(differenceAltitude) + " ft low");
        return differenceAltitude
    } else if (altitudeAtField = highKey) {
        console.log("Good energy")
    }
}
engineoutHk();

//nothing needed
