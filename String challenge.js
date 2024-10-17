
//defines a function named StringChallenge that takes one argument, str
function StringChallenge(str) { 

    //starts a loop setting i to 0 and loops as long as its less than the length of the string, will increment by 1 each iteration
    //this is how you examine each part of a string
    for (let i = 0; i < str.length; i++) {

    //checks if i is equal to a and if i + 4 is equal to b, && is used to ensure both conditions are met to to evaulaute to true
    if(str[i] === "a" && str[i+4] === "b"){

      //if above line is true, this function ends and returns true
      return true;
    }
  }
    //if the loop is done without being true then it ends with returning false 
    return false; 
  }
     
 console.log(StringChallenge("a123b"))

 //return true if a and b are seperated by 3 spaces

 //return false if a and b are not seperated by 3 spaces