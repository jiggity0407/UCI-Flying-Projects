function windCalculation(direction, airfield, winds) {
    let crossWinds = "Crosswinds = ";

    var result = direction - airfield;

    result = Math.abs(direction - airfield);

    if (result === 30 || result < 45) {
        return (`${crossWinds}` + winds * .5);
    } else {
        (result === 45 && result > 45);
        return (`${crossWinds}` + winds * .75);
    }
}
console.log(windCalculation(305, 260, 60));