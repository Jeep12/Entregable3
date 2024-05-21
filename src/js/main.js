
document.addEventListener("DOMContentLoaded", function () {
    let showCountry = document.getElementById("showCountry");
    let codeCountry;



    //+54
    // Establecer el valor predeterminado (Argentina)
    // El boton de argentina es el por defecto para obtengo todos los elementos con la clase countrybutton que tengan el atributo datavalue='54' en este caso argentina
    let argentinaButton = document.querySelector(".country-button[data-value='54']");

    //obengo el atributo datavalue para mostrarlo
    let selected = argentinaButton.getAttribute("data-value");
    codeCountry = selected;
    //mustro el pais seleccionado,
    //por defecto en este caso  argentina.
    showCountry.innerHTML = "+" + selected;

    argentinaButton.classList.add("selected"); // añado lclase "selected" al boton de argentina

    // Obtener todos los elementos con la clase "country-button"
    let countryButtons = document.querySelectorAll(".country-button");
    //recorro los botones
    countryButtons.forEach(function (button) {
        button.addEventListener("click", function () {


            //cada click  remueve la clase css selected para aprlicarla mas tarde 
            countryButtons.forEach(function (btn) {
                btn.classList.remove("selected");
            });

            // Obtener el valor de data-value del elemento clickeado
            let dataValue = button.getAttribute("data-value");
            codeCountry = dataValue;
            // Actualizar el elemento con id "showCountry" con el valor seleccionado
            showCountry.innerHTML = "+" + dataValue;

            button.classList.add("selected");
        });
    });


    //quedo escuchando el input de email para controlar errores
    // y asignar el valor

    let inputEmail = document.getElementById("inputEmail");
    inputEmail.addEventListener("change", () => {

        let valueEmail = inputEmail.value;
        if (!valueEmail.includes('@')) {
            toastAlert("¡Email incompleto !");
            inputEmail.style.border="2.5px solid #FC9A03";


        }else {

            inputEmail.style.border="none";

        }

    })


    //quedo escuchando el input de telefono, matter el input no el pais
    let matter = document.getElementById("matter");
    matter.addEventListener("change", () => {
        let matterValue = matter.value;

        if (matterValue.length < 6) {
            // Mostrar un mensaje de alerta utilizando la función toastAlert
            toastAlert("¡Asunto incompleto!");
            matter.style.border="2.5px solid #FC9A03";
        }else {
            matter.style.border="none";

        }
    });




    let inputTelephone = document.getElementById("inputTelephone");
    inputTelephone.addEventListener("change", () => {
        let valueNumber = inputTelephone.value;
        if (valueNumber.length <= 6) {
            toastAlert("¡Numero demasiado chico!");
            inputTelephone.style.border="2.5px solid #FC9A03";

        }else {
            inputTelephone.style.border="none";


        }
    });




    let btnSubmit = document.getElementById("submitMessage");
    btnSubmit.addEventListener("click", (e) => {
        e.preventDefault();
        let numberTelephone = inputTelephone.value;
        let email = inputEmail.value;
        let matterV = matter.value;
        

        let formJson = {
            codeCounty:codeCountry,
            number:numberTelephone,
            email:email,
            matter:matterV

        }
        if (!numberTelephone && !email && !matterV) { 
            toastAlert("Tiene los campos vacios");
        }else {
            console.log(formJson);
            
        }

    });
    //Uso libreria toastfy en esta funcion.
    //text es el mensaje 
    function toastAlert(text) {
        Toastify({
            text: text,
            duration: 3000,
            destination: "https://github.com/jeep12",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                fontSize: "15px",
                backgroundImage: "linear-gradient(to right top, #c49f58, #d19f48, #de9e37, #ed9d24, #fc9a03)"
            },
            onClick: function () { } // Callback after click
        }).showToast();
    }


});