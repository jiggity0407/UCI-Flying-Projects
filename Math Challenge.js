function MathChallenge(num) { 
    let times = 0;
    num = num.toString();
    
    while(num.length > 1) {
      times++
      num = num.split('').map(Number).reduce((a, b) => a * b).toString();
    }
    
      return times; 
    
    }
    console.log(MathChallenge(27))
   
    //3 * 9 =27
    //2 * 7 = 14
    //1 * 4 = 4

    //2 * 7 = 14
    //1 * 4 = 4