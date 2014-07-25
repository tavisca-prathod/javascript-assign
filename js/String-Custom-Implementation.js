function StringFunction(stringValue) {
	this.stringValue = stringValue;
	this.length = function() {
	var undefinedChar = this.stringValue[0];
	var totalLength = 0;
	while(undefinedChar!=undefined) {
		totalLength++;
		undefinedChar = this.stringValue[totalLength];
	}
	return totalLength;
}

	this.concat = function(secondString) {
		if(secondString!=null) {
			return this.stringValue+secondString.stringValue;
		this.stringValue = this.stringValue+secondString.stringValue;
		}
		else {
			return this.stringValue;
		}
	}

	this.substring = function(fromIndex,toIndex) {
		if(fromIndex==undefined && toIndex==undefined) {
			fromIndex=0;
			toIndex=this.length();
		}
		if(fromIndex > toIndex) {
			var tempFromIndex = fromIndex;
			fromIndex = toIndex;
			toIndex = tempFromIndex;
		}
		if(fromIndex < 0 || fromIndex==undefined) {
			fromIndex = 0;
		}
		if(toIndex > this.length() || toIndex==undefined) {
			toIndex = this.length();
		}
		var subStringValue = '';
		for(fromIndex; fromIndex < toIndex; fromIndex++) {
			subStringValue = subStringValue + this.stringValue[fromIndex];
		}
		if(fromIndex==0 && toIndex==this.length()) {
			subStringValue = stringValue;	
		}
		return subStringValue;
	}

	this.charAt = function(position) {
		position = position || 0;
		if(position < this.length() && position >= 0) {
			return this.stringValue[position];
		}
		else {
			return "";
		}
	}

	this.lastIndexOf = function(stringVal) {
		var indexOfCharacter = -1;
		for(var index=0; index < this.length(); index++) {
			if(stringVal===this.substring(index,index+ (new StringFunction(stringVal).length()))) {
				indexOfCharacter = index;
			}
		}
		return indexOfCharacter;
	}

	this.indexOf = function(stringVal) {
		var indexOfCharacter = -1;
		for(var index=0; index < this.length(); index++) {
			if(stringVal===this.substring(index,index+ (new StringFunction(stringVal).length()))) {
				indexOfCharacter = index;
				break;
			}
		}
		return indexOfCharacter;
	}

	this.replace = function(characterToBeReplaced,characterToReplaceWith) {
		if(characterToReplaceWith == undefined && characterToBeReplaced == undefined) {
			return this.stringValue;
		}
		else {
		var newReplacedString = "";
		var isRepalced = false;
		var lngthOfCharacterToBeReplaced = new StringFunction(characterToBeReplaced).length();

			for(var index = 0; index < this.length(); index++) {
				if(this.substring(index,index+lngthOfCharacterToBeReplaced)==characterToBeReplaced && isRepalced===false)  {
					newReplacedString = newReplacedString + characterToReplaceWith;
					isRepalced = true;
					index = index + lngthOfCharacterToBeReplaced -1;
				}
				else {
						newReplacedString = newReplacedString + this.stringValue[index];
				}
			}
			return newReplacedString;
		}
	}
}