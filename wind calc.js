function windCalulator(direction, runway, winds) {

  const degreesOff = direction - runway;

  const header = "Headwind = ";
  let angleInDegrees = direction - runway;
  let angleInRadians = angleInDegrees * (Math.PI / 180);
  let cosineValue = Math.cos(angleInRadians);
  let headWind = Math.floor(Math.abs(winds * cosineValue));

  const crosser = "Crosswind = ";
  let angleInDegreesCw = direction - runway;
  let angleInRadiansCw = angleInDegreesCw * (Math.PI / 180);
  let cosineValueCw = Math.sin(angleInRadiansCw);
  let crossWindCw = Math.floor(Math.abs(winds * cosineValueCw));

  const tail = "Tailwind = ";
  let angleInDegreesTw = direction - runway;
  let angleInRadiansTw = angleInDegreesTw * (Math.PI / 180);
  let cosineValueTw = Math.cos(angleInRadiansTw);
  let tailWindTw = Math.floor(Math.abs(winds * cosineValueTw));

  const noWinds = "No Winds"

  if (winds === 0) {
    return noWinds;

  } else if (degreesOff == 0) {
    return header + headWind;

  } else if (degreesOff >= 20 && degreesOff <= 60) {
    return crosser + crossWindCw + " " + '\n' + header + headWind;

  } else if (degreesOff > 60 || degreesOff != headWind) {
    return crosser + crossWindCw + " " + '\n' + tail + tailWindTw;
  }
}
console.log(windCalulator(80, 260, 0));
