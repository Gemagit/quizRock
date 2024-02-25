

const respuestas = {
    deflepard: "Def Lepard",
    thunderbird: "Thunderbird",
    america: "America",
    agila: "Agila",
    1997: "1997"
}

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    console.dir(event.target);

    for (let i = 0; i < respuestas.length; i++) {
        respuestas[i].addEventListener("click", function () {
            if(respuestas[i]==true) {
                respuestas[i].style.backgroundColor = "green";
            } else {
                respuestas[i].style.backgroundColor = "red";
            }
        })
    };

    let msj = "";

    if (respuestas[i]<=3) {
        alert ("¡Tienes que leer más la documentación!");
    } if (respuestas[i]>=4) {
        alert ("¡Enhorabuena, estás hecho un autético rockero");
    }


    if (msj.length != 0) {
        alert(msj); //imprime mensaje final de error
        //document.body.innerHTML += msj;
        let p = document.createElement("pre");
        let mensaje = document.createTextNode(msj);
        p.style.color = "#DD1C1A";
        p.style.fontSize = "16px";
        p.appendChild(mensaje);
    
        document.getElementById("contact").appendChild(p); // dibuja resultado
      }
      else{
        //Enviar formulario
        //document.querySelector("form").submit();
        alert("Formulario enviado con éxito");
        event.target.submit();
      }
    });

