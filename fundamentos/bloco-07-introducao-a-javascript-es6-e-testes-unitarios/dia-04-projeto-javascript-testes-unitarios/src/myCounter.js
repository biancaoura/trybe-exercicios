/* eslint-disable no-var */
/* eslint-disable block-scoped-var */
/* eslint-disable no-redeclare */
/* eslint-disable vars-on-top */

const myCounter = () => {
  var myArray = [];
  for (let counter = 0; counter <= 3; counter += 1) {
    myArray.push(counter);
    for (let countr = 2; countr <= 3; countr += 1) {
      myArray.push(countr);
    }
  }
  return myArray;
};
module.exports = myCounter;
