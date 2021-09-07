let boton = document.getElementById("login");
let btnSalir = document.getElementById("btnSalir");

boton.addEventListener("click",function(){
    mostrar.className = ('mostrar dos');
})

btnSalir.addEventListener("click",function(){
    mostrar.classList.remove('dos');
    mostrar.className = ('mostrar uno');
})


//Registro
let botonR = document.getElementById("registro");
let btnSalirDos = document.getElementById("btnSalirDos");

botonR.addEventListener("click",function(){
        mostrarDos.className = ('mostrarDos cuatro');
})

btnSalirDos.addEventListener("click",function(){
    mostrarDos.classList.remove('dos');
    mostrarDos.className = ('mostrarDos tres');
})

//validación registro
const formRegistro = document.getElementById('formRegistro');
const inputs = document.querySelectorAll('#formRegistro input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	password: /^.{6}$/, 
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{10}$/
}

const campos = {
	nombre: false,
	password: false,
	correo: false,
	telefono: false
}

const validarformRegistro = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formRegistro__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formRegistro__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formRegistro__input-error`).classList.remove('formRegistro__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formRegistro__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formRegistro__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formRegistro__input-error`).classList.add('formRegistro__input-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formRegistro__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formRegistro__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formRegistro__input-error`).classList.add('formRegistro__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formRegistro__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formRegistro__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formRegistro__input-error`).classList.remove('formRegistro__input-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarformRegistro);
	input.addEventListener('blur', validarformRegistro);
});

formRegistro.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.nombre && campos.password && campos.correo && campos.telefono ){
		formRegistro.reset();

		document.getElementById('formRegistro__mensaje-exito').classList.add('formRegistro__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formRegistro__mensaje-exito').classList.remove('formRegistro__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formRegistro__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formRegistro__grupo-correcto');
		});
	} else {
		document.getElementById('formRegistro__mensaje').classList.add('formRegistro__mensaje-activo');
	}
});

//efecto escritura
var typed = new Typed('.typed', {
	strings: [
		'<i>Te ayudamos a cumplir tu sueño de ser padres</i>',
		'<i>Los mejores en tratamientos de fertilidad</i>',
	],

	stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 1500, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 20, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '.', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});