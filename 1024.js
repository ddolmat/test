function to1240(num){
	var reverse = [];
	for(var i = 0; num !== 0; i++){
		var temp = num%4;
		num = Math.floor(num/4);
		if(temp === 3) reverse[i] = 4;
		else reverse[i] = temp;
	}
	for(var j = 0; j < i/2; j++){
		var temp = reverse[j];
		reverse[j] = reverse[i - 1 - j];
		reverse[i - 1 - j] = temp;
	}
	var answer = reverse.join("");
	console.log(answer);
}

function toDec(str){
	var result = 0;
	var arr = str.split("");
	for(var i = 0; i < arr.length; i++){
		var temp;
		if(arr[i] === "4"){
			result += 3*Math.pow(4, arr.length - 1 - i);
		} else result += +arr[i]*Math.pow(4, arr.length - 1 - i);
	}
	console.log(result);
}
