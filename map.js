function parseData(map_string){
	var json = {};
	json.width = +map_string.replace(/(\d+)\,\d+\n(.+\n)*/, "$1");
	json.height = +map_string.replace(/\d+\,(\d+)\n(.+\n)*/, "$1");
	var tempData = map_string.replace(/\d+\,\d+\n((.+\n)*)/, "$1");
	json.data = tempData.replace(/\n/g, "");

	return JSON.stringify(json);
}

function drawMap(json){
	var obj = JSON.parse(json);
	var data = obj.data.replace(/\-/g, " ");
	for(var i = 0; i < obj.height; i++){
		var result = data.substr(i*obj.width, obj.width);
		console.log(result);
	}
}
