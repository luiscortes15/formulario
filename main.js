window.onload = function(){
	let boton = document.getElementById('pod');

	if(boton){
		boton.addEventListener('click', guardar_datos);
		
	}
	

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
	pintar_datos(object);
	
}


function pintar_datos(object) {
	
	array.push(object);

	const table = document.getElementById('tabla'); 
	const tr = document.createElement("tr");
	
	const td = document.createElement("td");
	td.innerText = object.concepto;
	tr.appendChild(td)

	const td1 = document.createElement("td");
	td1.innerText = object.tipo;
	tr.appendChild(td1)


	const td2 = document.createElement("td");
	td2.innerText = object.monto;
	tr.appendChild(td2)

	const td3 = document.createElement("td");
	td3.innerText = object.fecha;
	tr.appendChild(td3)

	const td4 = document.createElement("td");
	td4.innerText = object.textarea;
	tr.appendChild(td4);

	// mi html iconos
	let unica = document.createElement("td");
	unica.innerHTML = `<img src="basura.png" alt="" class="imagen1" onclick="changeText(event)"><img src="editar.png" alt="" class="imagen2" onclick="changeText(event)">`;
	tr.appendChild(unica);


	table.appendChild(tr);
	

}

function unica(id) {
	id.innerHTML = "click";
  }
const limpiarcampos = () => {

	document.getElementById("input").value ='';
    document.getElementById("inputState").value ='';
	document.getElementById("number").value ='';
    document.getElementById("date").value ='';
	document.getElementById("text").value ='';



}







