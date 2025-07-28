// const convertToCelsius = function(temp) {
//   let cToF = (temp * (9/5)) + 32
//   if (Number.isInteger(cToF)) {
//     return cToF
//   }
//   else{
//     return parseFloat(cToF.toFixed(1))
//   }
// };

// const convertToFahrenheit = function(temp) {
//   let fToC = (temp - 32) * (5/9)
//   if (Number.isInteger(fToC)) {
//     return fToC
//   }
//   else{
//     return parseFloat(fToC.toFixed(1))
//   }
// };

// console.log(convertToCelsius(0))
// console.log(convertToFahrenheit(32))
// console.log(convertToFahrenheit(-100))

const convertToCelsius = function (temp) {
  return Math.round((temp - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (temp) {
  return Math.round(((temp * 9) / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
