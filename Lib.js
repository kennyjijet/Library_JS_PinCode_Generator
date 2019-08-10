var exports = module.exports = {}

// Generate digit for bank code.
function randomNumber()
{
    min = 0,
    max = 9;
    return (Math.floor(Math.random() * (max - min + 1)) + min).toString();
}

// Three consecutive digits should not be incremental (e.g. 1236 is invalid)
function checkPINCodeThreeIncremental(tempArray)
{
	var index = 0;
	for (index = 0; index < tempArray.length - 2; index++) {
      	if ((tempArray[index + 1] == parseInt(tempArray[index]) + 1) && (tempArray[index + 2] == parseInt(tempArray[index + 1]) + 1)) 
      	{
        	return false;
      	}
  	}
  	return true;
}

//Two consecutive digits should not be the same (e.g. 1156 is invalid)
function checkPINCodeTwoConsecutive(tempArray)
{
	var index = 0;
	for (index = 0; index < tempArray.length; index++) {
		if ((tempArray[index + 1] == tempArray[index])) 
      	{
        	return false;
      	}
  	}
  	return true;
}

function conditionForPINCode (pinArray)
{
	var tempArray = pinArray.split("");
	var validation = true;
	if(!checkPINCodeThreeIncremental(tempArray) || !checkPINCodeTwoConsecutive(tempArray))
	{
		validation = false;
	}
	return validation;
};

exports.PINCodeGenerator = function() {
		
	var i = 0;
	var pinArray = "";
	var validated = false;
	var duplicatedList = [];
	//1,000
	while(i < 4){
	 	pinArray += randomNumber();
	 	i++;
	 	if(i === 4)
	 	{
	 		validated = conditionForPINCode(pinArray);
	 		if(!validated && duplicatedList.indexOf(pinArray) > -1){
	 			i = 0;
	 			pinArray = "";
	 		}else{
	 			duplicatedList.push(pinArray);
	 		}
	 	}
	}
  return pinArray;
};




/*

1. The library should export a function that returns a batch of 1,000 PIN codes in random order
2. Each PIN code in the batch should be unique
Each PIN should be:
3.1 4 digits long
3.2 Two consecutive digits should not be the same (e.g. 1156 is invalid)
3.3 Three consecutive digits should not be incremental (e.g. 1236 is invalid)
3.4 The library should have automated tests.

*/