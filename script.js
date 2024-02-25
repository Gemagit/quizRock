
let boton = document.getElementById("myButton");

boton.addEventListener("click", function () {
    window.location.href ="./quiz.html";
});



const respuestas = {
    "defLepard": "Def Lepard",

}

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const respuesta1 = event.target["defLepard"]["Def Lepard"];
    const respuesta2 = event.target.name.value;


    let msj = "";

    if (respuesta1 == "Def Lepard") {
        return respuesta1.style.background = "green";

        if (respuesta !== "Def Lepard") {
            return respuesta.style.background = "red";
        }

    }
    else {
        alert("Respuestas enviadas correctamente");
        event.target.submit();
    }
});

