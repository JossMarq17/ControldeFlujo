//Part 1

function businessHours(dayNumber, hourNumber) {
    var hourNumber = parseInt(prompt("Escriba una hora (formato 24H): ")); //Pedimos al usuario una hora en formato de 24 HR.
    var dayNumber = parseInt(prompt("Ingrese un número del 0 al 1, siendo el 0 domingo: ")); //Le pedimos al usuario un día de la semana usando números del 0 al 6.

    if (hourNumber >= 9 && hourNumber <= 18 && dayNumber >= 1 && dayNumber <=6){
        alert("Horario laboral, lo podemos atender."); //Comparamos las horas y días para ver que se encuentren dentro del rango.
    } else if (hourNumber > 0 || hourNumber > 18 || hourNumber <= 24 || hourNumber < 9 && dayNumber == 0){
        alert("Fuera de horario, lo sentimos, no podemos atenderlo"); //En caso de que el usuario meta una hora o día en el que no tenemos servicio (Fuera del lunes a sabado o fuera del horario de 9 a 18), saldrá ese mensaje.
    } else if (hourNumber > 24 || hourNumber < 0) {
        alert("Ingrese un valor válido (formato 24H)"); //Este mensaje sale si el usuario mete un número que no está dentro del rango de las 24 HRS.
    } else if(dayNumber < 0 || dayNumber > 6){
        alert("Ingrese un valor válido para día"); //Este mensaje se muestra si el usuario mete un valor que no esta dentro de 0 al 6.
    }else {
        alert("Error"); //En caso de que el usuario no meta ningún valor válido.
    }
}
businessHours();


