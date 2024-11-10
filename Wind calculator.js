function windCalculation(direction, airfield, winds) {
    let crossWinds = "Crosswinds = ";
    let headWinds = "Headwinds = ";

    var result = direction - airfield;

    result = Math.abs(direction - airfield);

    if (result >= 30 && result < 45) {
        return (`${crossWinds}` + winds * .5);

    } else if (result >= 45 && result < 60) {
        return (`${crossWinds}` + winds * .75);

    } else {
        return (`${headWinds}` + winds);
    }


}
console.log(windCalculation(290, 260, 25));
