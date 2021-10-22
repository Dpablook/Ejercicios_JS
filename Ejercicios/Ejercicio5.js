
/*
a- Usando la función ARRAY, sin usar un bucle FOR ni estructuras de
repetición de ningún tipo, declarar un arreglo que contenga los
números del 10 al 25.
b- Crear una función que reciba este arreglo por parámetro.
c- Ya dentro de la función, se deberá recorrer el arreglo recibido y
generar dos valores a mostrar por pantalla, la cantidad de números
múltiplos de 7 recibidos en el array y la sumatoria de los números
que superen el promedio de los números contenidos también en
dicho array.
** Todo el proceso deberá realizarse dentro de la función.
*/

var arreglo=[10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
var multiplosSiete=0;
var promedio=0;
var i=-1;
var masPromedio=0;

function calculo(parametro){
	parametro.forEach(function(valor){
		//console.log(valor);
		if(valor%7==0){
			multiplosSiete=multiplosSiete+1;
		}
		promedio=promedio+valor;
		i++;
	});
	promedio=promedio/i;

	parametro.forEach(function(valor){
		if (valor>promedio){
			masPromedio++;
		}
	});

	console.log("los numeros multiplos de siete son: " + multiplosSiete);
	console.log("los numeros que son mas altos que el promedio son: " + masPromedio);
}
calculo(arreglo);