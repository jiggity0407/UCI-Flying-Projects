function windCalculation(direction, airfield, winds) {
    let crossWinds = "Crosswinds = ";
    let headWinds = "Headwinds = ";

    //need to figure out tailwinds
    let tailwinds = "Tailwinds = ";

    var result = direction - airfield;

    result = Math.abs(direction - airfield);

    if (result >= 30 && result < 45) {
        return (`${crossWinds}` + winds * .5);

    } else if (result >= 45 && result < 60) {
        return (`${crossWinds}` + winds * .75);

    } else if (result > 60) {
        return (`${crossWinds}` + winds * 1);

    } else if (result === 0 || result <= 20) {
        return(`${headWinds}` + winds);
        
    }
}
console.log(windCalculation(280, 260, 20));