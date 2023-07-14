const agregarALaPantalla = (valor)=> {
	document.getElementById('pantalla').value +=valor;
}

const calcular =()=> {
	const numeros = document.getElementById('pantalla').value;
	const resultado = eval(numeros);
	document.getElementById('pantalla').value = resultado;
}

const limpiarPantalla = ()=>document.getElementById('pantalla').value= ' ';