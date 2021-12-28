//Primer boton
let boton = document.getElementById("botonSaludar");
boton.addEventListener("click", function () {
  usuario = prompt("ingrese su usuario");
  alert("Hola " + usuario);
});
//Segundo boton
class Alumno {
  constructor(nombre, dni, edad, fecha) {
    this.nombre = nombre;
    this.dni = dni;
    this.edad = edad;
    this.fecha = fecha;

    this.datos = function () {
      console.log("El nombre es: " + this.nombre);
      console.log("El dni es: " + this.dni);
      console.log("La edad: " + this.edad);
      console.log("La fecha de nacimiento es: " + this.fecha);
    };
  }
}

let alumnos = [];
let boton2 = document.getElementById("cargarAlumnoId");
boton2.addEventListener("click", function cargarAlumno() {
  let alumno = new Alumno("Pedro", 33345655, 16, "15/06/2008");
  alert("Los datos ingresados deben ser: nombre ej. " + alumno.nombre);
  alert("Los datos ingresados deben ser: dni ej." + alumno.dni);
  alert("Los datos ingresados deben ser: edad ej." + alumno.edad);
  alert("Los datos ingresados deben ser: fecha ej." + alumno.fecha);

  alert("Ingrese sus datos personales");
  let nombreAlumno = prompt("Ingrese su nombre");
  let dniAlumno = prompt("Ingrese su dni");
  let edadAlumno = prompt("Ingrese su edad");
  let fechaAlumno = prompt("Ingrese su fecha de nacimiento");

  let alumnoData = new Alumno(nombreAlumno, dniAlumno, edadAlumno, fechaAlumno);
  console.log(alumnoData);
  alumnoData.datos();
});
//Tercer boton
boton3 = document.getElementById("capturar");
boton3.addEventListener("click", function capturar(e) {
  e.preventDefault();
  function talleres(taller, horario) {
    this.taller = taller;
    this.horario = horario;
  }
  let nombreTaller = document.getElementById("taller").value;
  let nombreTaller2 = document.getElementById("horario").value;

  nuevoTaller = new talleres(taller, horario);
  elTaller();
});
let baseDatos = [];
function elTaller() {
  baseDatos.push(nuevoTaller);
  console.log(baseDatos);
  let valor = document.getElementById("taller");
  let valor2 = document.getElementById("horario");
  console.log(valor + valor2);
  let lista = document.getElementById("listaTaller");
  let nuevaLi = document.createElement("li");
  nuevaLi.innerHTML = `${valor.value + ": " + valor2.value}`;

  lista.appendChild(nuevaLi);
}
boton3bis = document.getElementById("borrarTalleres");
boton3bis.addEventListener("click", function borrarTalleres() {
  let lista = document.getElementById("listaTaller");
  lista.removeChild(lista.lastChild);
});
//Cuarto boton
let boton4 = document.getElementById("calificacionesId");
boton4.addEventListener("click", function calificaciones() {
  let sumaTotal = 0;
  let cantidadCalificaciones = 6;
  for (let i = 1; i <= 6; i++) {
    let calificacionIngresada = parseInt(
      prompt("ingrese sus calificacion nº: " + i)
    );
    sumaTotal = sumaTotal + calificacionIngresada;
  }
  let resultadoFinal = sumaTotal / cantidadCalificaciones;

  if (resultadoFinal >= 7) {
    alert("Aprobado");
  } else if (resultadoFinal >= 4) {
    alert("Tenés que esforzarte más");
  } else {
    alert("Lamentablemente tenés que recursar");
  }
});

//Quinto boton
let boton5 = document.getElementById("notasId");
boton5.addEventListener("click", function notas(e) {
  e.preventDefault();
  let notas = [];
  let calificacionNotas;
  for (let i = 0; i < 10; i++) {
    calificacionNotas = prompt("ingrese todas sus calificaciones");
    notas.push(calificacionNotas);
  }
  notas.sort((a, b) => {
    return a - b;
  });
  alert("Tus notas son " + notas);
});
//Sexto boton
let boton6 = document.getElementById("materiasId");
boton6.addEventListener("click", function materias() {
  let valor = document.getElementById("listaMaterias");
  let lista = document.getElementById("lista");
  let nuevaLi = document.createElement("li");
  nuevaLi.innerHTML = `${valor.value}`;
  nuevaLi.style.color = "blue";
  lista.appendChild(nuevaLi);
});
let boton6Bis = document.getElementById("borrarMateriasId");
boton6Bis.addEventListener("click", function borrarMaterias() {
  let lista = document.getElementById("lista");
  lista.removeChild(lista.lastChild);
});

//Septimo boton
$("#boton7").click(function (e) {
  e.preventDefault();
  let valor = $("#input").val();
  //console.log(valor)
  $("#listaUl").append(`<li>${valor}</li>`);
});
$("#boton7Bis").click(function (e) {
  e.preventDefault();
  $("#listaUl").empty();
});

//Octavo boton
$("#boton8").on("change", function (e) {
  console.log(e.target.value);
});

//Noveno boton
$("#botonSlideToggle").click(function () {
  $(".formularioCaer").slideToggle(2000);
});

//Geoloaction + clima
let ubicacion = navigator.geolocation.getCurrentPosition(mostrarUbicacion);
function mostrarUbicacion(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let urlClima =
    "http://api.openweathermap.org/data/2.5/weather?lat=" +
    latitude +
    "&lon=" +
    longitude +
    "&appid=671a26ae4d9245e0bb2ce30710bdd1e1";

  $("#botonClima").click(function (e) {
    e.preventDefault();
    $.get(urlClima, function (respuesta) {
      console.log(respuesta.weather[0].description);

      let contenido = `<div>
      <h2>${respuesta.name}</h2>
      
      <p>Clima: ${respuesta.weather[0].description}</p>                      
      <p>Temp max: ${respuesta.main.temp_max}</p>
      <p>Temp min: ${respuesta.main.temp_min}</p>
      </div>
      `;

      $(".cardClima").append(contenido);
    });
  });
}
