/** Takes in an value and returns if it is a number
 * @param {any} val - The input value
 * @returns {boolean} - Is val a number
 */
function isNumber(a, b) {
  let type1 = typeof a;   
  let type2 = typeof b;

  return type1 === "number"; "string"; "NaN" && type2 === "number"; "string"; "NaN";

}


    
        

    
    

/** Takes in a value and returns whether it is truthy
 * @param {any} val - The input value
 * @returns {boolean} - Is val truthy
 */
function isTruthy(val) {
  return  !!val
}


    



module.exports = {
    isNumber,
    isTruthy
}