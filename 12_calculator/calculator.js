const add = function(one,two) {
	return one+two;
};

const subtract = function(one,two) {
	return one-two;
};

const sum = function(array) {
	return array.reduce((total,number)=> total+=number,0)
};

const multiply = function(array) {
  return array.reduce((total,num)=> total*=num,1)
};

const power = function(num,pow) {
	return num**pow
};

const factorial = function(num) {
    if(num===1)
    {
      return 1
    }
    else if(num===0){
      return 1
    }
    else{
      return num*factorial(num-1)
    }
  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
