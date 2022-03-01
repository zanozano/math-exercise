/* Ejecicio 2 */
function calculationSystem(valueButton) {
	/* Se captura la informacion de los inputs */
	var valueInputValue1 = parseInt(document.getElementById('valueInputValue1').value);
	var valueInputValue2 = parseInt(document.getElementById('valueInputValue2').value);
	/* Se elige una de las opciones para realizar el calculo */
	var OperationAction = valueButton;
	if (valueInputValue1 != valueInputValue2 && valueInputValue1 > 0 && valueInputValue2 > 0) {
		switch (OperationAction) {
			case 1:
				var additionResult = valueInputValue1 + valueInputValue2;
				document.getElementById(
					'typeOperation'
				).innerHTML = `El resultado de la <strong>SUMA</strong>`;
				document.getElementById('operationResult').innerHTML = additionResult;
				break;
			case 2:
				var subtractionResult = valueInputValue1 - valueInputValue2;
				document.getElementById(
					'typeOperation'
				).innerHTML = `El resultado de la <strong>RESTA</strong>`;
				document.getElementById('operationResult').innerHTML = subtractionResult;
				break;
			case 3:
				var multiplicationResult = valueInputValue1 * valueInputValue2;
				document.getElementById(
					'typeOperation'
				).innerHTML = `El resultado de la <strong>MULTIPLICACIÓN</strong>`;
				document.getElementById('operationResult').innerHTML = multiplicationResult;
				break;
			case 4:
				var divisionResult = valueInputValue1 / valueInputValue2;
				document.getElementById(
					'typeOperation'
				).innerHTML = `El resultado de la <strong>DIVISIÓN</strong>`;
				document.getElementById('operationResult').innerHTML = divisionResult;
				break;
			case 5:
				var moduleResult = valueInputValue1 % valueInputValue2;
				document.getElementById(
					'typeOperation'
				).innerHTML = `El resultado del <strong>MODULO</strong>`;
				document.getElementById('operationResult').innerHTML = moduleResult;
				break;
		}
	} else {
		document.getElementById('operationResult').innerHTML =
			'Los valores deben ser diferentes y mayores que 0';
	}
}

/* Ejecicio 3 */
/* Se crean las constantes de temperatura */
const gKelvin = 273.15;
const gFahrenheit = 32;

/* Se crea la funcion que calculara la transformacion de Celsius a K y F. */
function convertDegree(value) {
	/* Se captura la informacion del input*/
	var valueInput = document.getElementById('valueInput').value;
	if (value == 1 && valueInput == '') {
		/* Se valida input vacio y se auto completa con K */
		document.getElementById('resultDegree').innerHTML = gKelvin + ' K';
		document.getElementById(
			'typeDegree'
		).innerHTML = `La temperatura en <strong>Kelvin</strong> es`;
	} else if (value == 2 && valueInput == '') {
		/* Se valida input vacio y se auto completa con F */
		document.getElementById('resultDegree').innerHTML = gFahrenheit + ' F';
		document.getElementById(
			'typeDegree'
		).innerHTML = `La temperatura en <strong>Fahrenheit</strong> es`;
	} else if (value == 1) {
		/* Se valida input y se transforma de C a K */
		var convertKelvin = gKelvin + parseFloat(valueInput);
		document.getElementById('resultDegree').innerHTML = convertKelvin.toFixed(1) + ' K';
		document.getElementById(
			'typeDegree'
		).innerHTML = `La temperatura en <strong>Kelvin</strong> es`;
	} else {
		/* Se valida input y se transforma de C a F */
		var convertFahrenheit = parseFloat(valueInput) * 1.8 + gFahrenheit;
		document.getElementById('resultDegree').innerHTML = convertFahrenheit.toFixed(1) + ' F';
		document.getElementById(
			'typeDegree'
		).innerHTML = `La temperatura en <strong>Fahrenheit</strong> es`;
	}
}

/* Ejecicio 4 */
/* Se crean las constantes de semana y año */
const weekDays = 7;
const yearDays = 365;

function convertDays() {
	/* Se guardan las variables para y formulas  */
	var valueDays = parseInt(document.getElementById('valueDays').value);

	/* Resto de año */
	var totalYear = valueDays / yearDays;
	var totalYearResto = valueDays % yearDays;
	var totalWeek = totalYearResto / weekDays;
	var totalWeeksResto = totalYearResto % weekDays;

	/* Comprueba si el numero ingresado es diferente a 0 y el campo esta completo  */
	if (valueDays > 0) {
		/* Dias */
		document.getElementById('typeDays').innerHTML = `<strong>Días</strong>`;
		document.getElementById('resultDays').innerHTML = Math.floor(totalWeeksResto);
		/* Semanas */
		document.getElementById('typeWeeks').innerHTML = `<strong>Semanas</strong>`;
		document.getElementById('resultWeeks').innerHTML = Math.floor(totalWeek);
		/* Años */
		document.getElementById('typeYears').innerHTML = `<strong>Años</strong>`;
		document.getElementById('resultYears').innerHTML = Math.floor(totalYear);
	} else {
		document.getElementById('resultWeeks').innerHTML = `<strong>Ingresa un valor</strong>`;
	}
}

/* Ejecicio 5 */
function convertAverage() {
	var valueaverage1 = parseInt(document.getElementById('value1-average').value);
	var valueaverage2 = parseInt(document.getElementById('value2-average').value);
	var valueaverage3 = parseInt(document.getElementById('value3-average').value);
	var valueaverage4 = parseInt(document.getElementById('value4-average').value);
	var valueaverage5 = parseInt(document.getElementById('value5-average').value);
	/* Suma */
	var sumTotal = valueaverage1 + valueaverage2 + valueaverage3 + valueaverage4 + valueaverage5;
	/* Promedio */
	var averageTotal = sumTotal / 5;
	/* Condicion */
	if (sumTotal > 0 && sumTotal != '') {
		/* Asignacion de suma */
		document.getElementById(
			'sumNumber'
		).innerHTML = `La <strong>SUMA</strong> de los 5 valores`;
		document.getElementById('sumResult').innerHTML = sumTotal;
		/* Asignacion de promedio */
		document.getElementById(
			'averageNumber'
		).innerHTML = `El <strong>PROMEDIO</strong> de los 5 valores`;
		document.getElementById('averageResult').innerHTML = averageTotal;
	} else {
		document.getElementById(
			'sumResult'
		).innerHTML = `<strong>Ingresa todos los valores</strong>`;
	}
}
