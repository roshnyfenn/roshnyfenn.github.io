		


		var input = document.querySelector('.input_text');
		var main = document.querySelector('#name');
		var temp = document.querySelector('.temp');
		var desc = document.querySelector('.desc');
		var clouds = document.querySelector('.clouds');
		var button= document.querySelector('.submit');
		var elem = document.createElement("img");


		document.getElementById("picture").appendChild(elem);



input.addEventListener('dblclick', function(name){;
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=79cb849872233fb9ee987315631c3760&units=metric')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue + ".";
  desc.innerHTML = "Description - "+descValue;
  temp.innerHTML = "Temp (C) - "+tempValue;
  input.value ="";

  		var random = Math.floor((Math.random() * 20) + 1);
  		console.log(random)

  		elem.setAttribute("height", "256");
		elem.setAttribute("width", "256");


				console.log(data['main']['temp'])
				
				if (data['main']['temp'] < 10) {
					document.getElementById("fennectemp").innerHTML = "<h2>REALLY Cold Fennec!!!</h2>";

					elem.setAttribute("src", "fennecs/fennec" + (random) + ".jpg");

				} 

				else if (data['main']['temp'] < 20) {
					document.getElementById("fennectemp").innerHTML = "<h2>Cold Fennec!!!</h2>";

					elem.setAttribute("src", "fennecs/fennec" + (random) + ".jpg");

				}

				else if (data['main']['temp'] < 27) {
					document.getElementById("fennectemp").innerHTML = "<h2>Warm Fennec!!!</h2>";

					elem.setAttribute("src", "fennecs/fennec" + (random) + ".jpg");

				}

				else if (data['main']['temp'] < 40) {
					document.getElementById("fennectemp").innerHTML = "<h2> REALLY Warm Fennec!!!</h2>";

					elem.setAttribute("src", "fennecs/fennec" + (random) + ".jpg");

				}

})

}


)



	 
