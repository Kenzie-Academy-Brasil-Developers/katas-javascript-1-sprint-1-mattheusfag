function oneThroughTwenty() {
 let result =[];
 for (let i = 1; i < 21; i++ ){
   result.push(i);
 }
 return result;
}


function evensToTwenty() {
  let result = [];
    for (let i = 1; i < 21; i++){
      
    if (i % 2 == 0){
      result.push(i);
    }
    
  }
  return result;
}



function oddsToTwenty() {
    
  let result = [];
  for (let i = 0; i < 20; i++){
    
  if (i % 2 === 1){
       result.push(i);
  
}
}
 return result;
}



function multiplesOfFive() {
    let result = [];
    for (let i = 1; i < 101; i++){
      if ( i % 5 === 0){
        result.push(i);

      }
    }
  return result;

}



function squareNumbers() {
let  result = []
for (let i = 1; i < 11; i++){
  
  result.push(i*i)
  }


return result;    
}



function countingBackwards() {
    let result = [];
    for (let i = 20; i >= 1; i--){
      result.push(i);
    }
    return result;
}



function evenNumbersBackwards() {
    let result =[];
    for (let i = 21; i > 1; i--){
      if (i % 2 === 0){
        result.push(i);
}
}
        return result;
}


function oddNumbersBackwards() {
    let result = [];
    for (let i = 20; i >= 1; i--){
      if (i % 2 === 1){
        result.push(i)
      }
    }
    return result;
}



function multiplesOfFiveBackwards(){
    let result = [];
    for (let i = 101; i >= 1; i--){
      if(i % 5 === 0){
        result.push(i);
      }
    }
    return result;
}



function squareNumbersBackwards() {
    let result = []
    for (let i = 10; i >= 1; i--){
      result.push(i * i)
    }
    return result;
}


