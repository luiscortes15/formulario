window.onload = function(){
	let boton = document.getElementById('pod');
	boton.addEventListener('click', guardar_datos);
}
const array  = [];

function guardar_datos() {
	
	// Guardar datos de objeto

	const object = {
		concepto: document.getElementById("input").value,
		tipo: document.getElementById("inputState").value,
		monto:document.getElementById("number").value,
		fecha: document.getElementById("date").value,
		textarea: document.getElementById("text").value,
	}
	limpiarcampos();

	array.push(object);
	pintar_datos();
	
}


function pintar_datos() {
	

	const tbody = document.querySelector('#tabla tbody'); 
	tbody.innerHTML = '';

	array.forEach(element => {
		const tr = document.createElement("tr");
		const td = document.createElement("td");
		td.innerText = element.concepto;
		tr.appendChild(td)

		const td1 = document.createElement("td");
		td1.innerText = element.tipo;
		tr.appendChild(td1)


		const td2 = document.createElement("td");
		td2.innerText = element.monto;
		tr.appendChild(td2)

		const td3 = document.createElement("td");
		td3.innerText = element.fecha;
		tr.appendChild(td3)

		const td4 = document.createElement("td");
		td4.innerText = element.textarea;
		tr.appendChild(td4);


		// mi html iconos
		let unica = document.createElement("td");
		unica.innerHTML = `<img src="basura.png" alt="" class="imagen1"><img src="editar.png" alt="" class="imagen2">`;
		tr.appendChild(unica);


		tbody.appendChild(tr);
	})
}

const limpiarcampos = () => {

	document.getElementById("input").value ='';
    document.getElementById("inputState").value ='';
	document.getElementById("number").value ='';
    document.getElementById("date").value ='';
	document.getElementById("text").value ='';



}







