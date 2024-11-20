

function windCalulator(direction, runway, winds) {
  let header = "Headwind = ";
  let angleInDegrees = direction - runway;
  let angleInRadians = angleInDegrees * (Math.PI / 180);
  let cosineValue = Math.cos(angleInRadians);
  let headWind = Math.abs(winds * cosineValue);

  let crosser = "Crosswind = ";
  let angleInDegreesCw = direction - runway;
  let angleInRadiansCw = angleInDegreesCw * (Math.PI / 180);
  let cosineValueCw = Math.sin(angleInRadiansCw);
  let crossWindCw = Math.abs(winds * cosineValueCw);

  let tail = "Tailwind = ";
  let angleInDegreesTw = direction - runway;
  let angleInRadiansTw = angleInDegreesTw * (Math.PI / 180);
  let cosineValueTw = Math.cos(angleInRadiansTw);
  let crossWindTw = Math.abs(winds * cosineValueTw);

  return (`${crosser}`) + Math.floor(crossWindCw) + " " + '\n' + (`${header}`) + Math.floor(headWind);
}


console.log(windCalulator(80, 80, 20));















