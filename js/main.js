document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los elementos con la clase "country-button"
    let countryButtons = document.querySelectorAll(".country-button");
    let showCountry = document.getElementById("showCountry");
    
    // Establecer el valor predeterminado (Argentina)
    

    //+54
    // El boton de argentina es el por defecto para obtengo todos los elementos con la clase countrybutton que tengan el atributo datavalue='54' en este caso argentina
    let argentinaButton = document.querySelector(".country-button[data-value='54']");

    //obengo el atributo datavalue para mostrarlo
    let selected = argentinaButton.getAttribute("data-value");    
    showCountry.innerHTML = "+"+selected;

    argentinaButton.classList.add("selected"); // añado lclase "selected" al boton de argentina

    countryButtons.forEach(function(button) {
        button.addEventListener("click", function() {
     

            //cada click  remueve la clase css selected para aprlicarla mas tarde 
            countryButtons.forEach(function(btn) {
                btn.classList.remove("selected");
            });
            
            // Obtener el valor de data-value del elemento clickeado
            let dataValue = button.getAttribute("data-value");
            
            // Actualizar el elemento con id "showCountry" con el valor seleccionado
            showCountry.innerHTML ="+" +dataValue;
            
            button.classList.add("selected");
        });
    });
});
