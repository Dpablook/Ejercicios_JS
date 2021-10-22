
/*
a- Escribir una función que reciba cuatro (4) valores numéricos enteros
mayores, menores o iguales a cero.
b- Los valores recibidos deberán ser guardados en un array dentro de
la función.
c- Como último paso, mostrarlos ordenados de manera ascendente.
** Todo el proceso deberá realizarse dentro de la función.
*/

function verificar(num1,num2,num3,num4,num5){
	var arreglo = [];
	arreglo.push(num1,num2,num3,num4);
	console.log(arreglo);
	//ordenar de forma ascendente
	arreglo.sort(function(a, b){return a - b});
	console.log(arreglo);
	//ordenar de forma decendente
	arreglo.sort(function(a, b){return b - a});
	console.log(arreglo);
	//si solo ordenamos con .sort() nos da error, si no da error no los ordena bien
	/*arreglo.sort(arreglo);
	console.log(arreglo);*/

}
verificar(450,3,22,66,100);




