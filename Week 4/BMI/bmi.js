window.onload = () => {
	let button = document.querySelector("#btn");
	button.addEventListener("click", calcBMI);
};

function calcBMI() {
	let height = parseInt(document.querySelector("#height").value);
	let weight = parseInt(document.querySelector("#weight").value);
	let result = document.querySelector("#result");

	if (height === "" || isNaN(height))
		result.innerHTML = "Introduceți înălțimea!";

	else if (weight === "" || isNaN(weight))
		result.innerHTML = "Introduceți greutatea!";

	else {

		let bmi = (weight / ((height**2)/ 10000)).toFixed(2);

		if (bmi < 18.6) 
            result.innerHTML = "Mai mănâncă:" + " " +  bmi;

		     else if (bmi >= 18.6 && bmi < 24.9)
			result.innerHTML = "Ești ok:" + " " +  bmi;

         else if (bmi >= 24.9 && bmi < 29.9)
			result.innerHTML ="Mai slăbește:" + " " +  bmi;

		else 
        result.innerHTML ="Du-te la sală:" + " " +  bmi;
	}
}
