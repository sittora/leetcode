/**
 * @param {string} s
 * @return {number}
 */
  const characterValues = {
  	I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  } 
  
var romanToInt = function(string) {
    const array = string.split("");
    
    let total = 0;
    let current;
    let currentValue;
    let next;
    let nextValue;
    
for (let i=0; i < array.length; i++){
        current = array[i];
        currentValue = characterValues[current]
        
        next = array[i+1];
        nextValue = characterValues[next]
        
    if (currentValue < nextValue){
        total -= (currentValue);
    } else {
        total +=(currentValue);
    }
}
  return total   
};