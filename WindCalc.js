function windCalulator(direction, runway, winds) {
  
  const header = "Headwind = ";
  let angleInDegrees = direction - runway;
  let angleInRadians = angleInDegrees * (Math.PI / 180);
  let cosineValue = Math.cos(angleInRadians);
  let headWind = Math.abs(winds * cosineValue);

  const crosser = "Crosswind = ";
  let angleInDegreesCw = direction - runway;
  let angleInRadiansCw = angleInDegreesCw * (Math.PI / 180);
  let cosineValueCw = Math.sin(angleInRadiansCw);
  let crossWindCw = Math.abs(winds * cosineValueCw);

  const tail = "Tailwind = ";
  let angleInDegreesTw = direction - runway;
  let angleInRadiansTw = angleInDegreesTw * (Math.PI / 180);
  let cosineValueTw = Math.cos(angleInRadiansTw);
  let crossWindTw = Math.abs(winds * cosineValueTw);

  if (direction === runway) {
    return (`${header}`) + Math.floor(headWind);

  } else if(direction >= 30 && direction < 60){
    return (`${crosser}`) + Math.floor(crossWindCw) + " " + '\n' + (`${header}`) + Math.floor(headWind);

  } else if(direction >= 60){
    return (`${crosser}`) + Math.floor(crossWindCw);
}

}
console.log(windCalulator(320, 260, 20));

 //  + " " + '\n' + (`${header}`) + Math.floor(headWind) + " " + '\n' + (`${tail}`) + Math.floor(crossWindTw);














