

const respuestasCorrectas = {
    pregunta1: "Def Lepard",
    pregunta2: "Thunderbird",
    pregunta3: "America",
    pregunta4: "Agila",
    pregunta5: "1997"
}

const respuestas = document.querySelectorAll(".respuesta");
// Iterar sobre cada elemento y agregar un event listener
respuestas.forEach(function(respuesta) {
    respuesta.addEventListener("click", function() {
        // Cambia el color de fondo del contenedor(respuesta)
       respuesta.style.backgroundColor = "rgb(39, 48, 129)";
    });
});



document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const respuesta1 = event.target.pregunta1.value;
    const respuesta2 = event.target.pregunta2.value;
    const respuesta3 = event.target.pregunta3.value;
    const respuesta4 = event.target.pregunta4.value;
    const respuesta5 = event.target.pregunta5.value;

    const respuestas = document.querySelectorAll(".respuesta");
// Iterar sobre cada elemento y agregar un event listener
respuestas.forEach(function(respuesta) {
    respuesta.addEventListener("click", function() {
        if (respuesta[i] === respuestasCorrectas[i]){
            respuesta.style.backgroundColor = "green";
        } else {
            respuesta.style.backgroundColor = "red";
        }
    });
});

    let aciertos = 0;
    if (respuesta1 === respuestasCorrectas.pregunta1) aciertos++;
    if (respuesta2 === respuestasCorrectas.pregunta2) aciertos++;
    if (respuesta3 === respuestasCorrectas.pregunta3) aciertos++;
    if (respuesta4 === respuestasCorrectas.pregunta4) aciertos++;
    if (respuesta5 === respuestasCorrectas.pregunta5) aciertos++;

    if (aciertos <= 3) {
        let emoTriste = "\u{1F61E}";
        alert(`${emoTriste}Por favor, lea la documentación rockera.${emoTriste}`);
    } else { //4 aciertos o más
        let emoRock="\u{1F918}";
        alert(`${emoRock}¡Enhorabuena, estás hecho un auténtico rockero!${emoRock}`);
        event.target.submit();
    }
});

