var hideInputsOnLoad = function() {
	var inputStringOneSpan = document.getElementById('inputStringOneSpan');
	var inputStringTwoSpan = document.getElementById('inputStringTwoSpan');
	var subStringIndexSpan = document.getElementById('subStringIndexSpan');
	var indexOfCharSpan = document.getElementById('indexOfCharSpan');
	var charAtSpan = document.getElementById('charAtSpan');
	var replaceStringSpan = document.getElementById('replaceStringSpan');

	 inputStringOneSpan.hidden = false;
	 inputStringTwoSpan.hidden = true;
	 subStringIndexSpan.hidden = true;
	 indexOfCharSpan.hidden = true;
	 charAtSpan.hidden = true;
	 replaceStringSpan.hidden = true;
	var selectOption = document.getElementById('selectOperation');
	selectOption.required = true; 

	var submitButton = document.getElementById('submitButton');
	submitButton.addEventListener('click',submitOperation,false);
}

 //<option id="1" value="Length">Length</option>
        //<option id="2" value="Concat">Concat</option>
        //<option id="3" value="CharAt">CharAt</option>
        //<option id="4" value="SubString">SubString</option>
        //<option id="5" value="LastIndexOf">LastIndexOf</option>
        //<option id="6" value="IndexOf">IndexOf</option>
        //<option id="7" value="Replace">Replace</option>

var userInputByOperation = function () {
	var selectOption = document.getElementById('selectOperation');
	var output = document.getElementById('output');
	var inputStringOne = document.getElementById('inputStringOne');
	var indexOfChar = document.getElementById('indexOfChar');
	indexOfChar.value = "";
	inputStringOne.value = "";
	output.innerHTML = "";

	switch(selectOption.selectedIndex) {
		//Length
		case 0:
			hideInputsOnLoad();
			break;
		case 1: 
			hideInputsOnLoad();
			break;
		case 2:
			hideInputsOnLoad();
			inputStringTwoSpan.hidden = false;			
			break;
		case 3: 
			hideInputsOnLoad();
			charAtSpan.hidden = false;
			break;
		case 4:
			hideInputsOnLoad();
			subStringIndexSpan.hidden = false;
			break;
		case 5:
			hideInputsOnLoad();
			indexOfCharSpan.hidden = false;
			break;
		case 6:
			hideInputsOnLoad();
			indexOfCharSpan.hidden = false;
			break;
		case 7:
			hideInputsOnLoad();
			replaceStringSpan.hidden = false;
			break;
	}
}

var submitOperation = function() {
	var selectOption = document.getElementById('selectOperation');
	var inputStringOne = document.getElementById('inputStringOne');
	var stringFunction = new StringFunction(inputStringOne.value);
	var output = document.getElementById('output');
	switch(selectOption.selectedIndex) {
		//Length
		case 1: 
			output.innerHTML = stringFunction.length();
			break;
		case 2:
			var inputStringTwo = document.getElementById('inputStringTwo');
			var string = new StringFunction(inputStringTwo.value);
			output.innerHTML = stringFunction.concat(string);
			break;
		case 3: 
			var charAtVal = document.getElementById('charAt');
			output.innerHTML = stringFunction.charAt(charAtVal.value);
			break;
		case 4:
			var fromIndex = document.getElementById('fromIndex');
			var toIndex = document.getElementById('toIndex');
			output.innerHTML = stringFunction.substring(fromIndex.value,toIndex.value);
			break;
		case 5:
			var indexOfChar = document.getElementById('indexOfChar');
			output.innerHTML = stringFunction.lastIndexOf(indexOfChar.value);
			break;
		case 6:
			var indexOfChar = document.getElementById('indexOfChar');
			output.innerHTML = stringFunction.indexOf(indexOfChar.value);
			break;
		case 7:
			var replaceString = document.getElementById('replaceString');
			var replaceStringWith = document.getElementById('replaceStringWith');
			output.innerHTML = stringFunction.replace(replaceString.value,replaceStringWith.value);
			break;
	}
}

