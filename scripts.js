// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)

request.send();

request.onload = function() {
  // Begin accessing JSON data here
var data = JSON.parse(this.response);
for(var i in data)
{
	var key=i;
	var val=data[i];
	
for(var i in val)
{
	var key=i;
	var v=val[i];
	if(key=="flag")
	
	{	
console.log(key);
console.log(v);
	}
}
}
}
