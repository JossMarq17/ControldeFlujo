//Challenge using getDay and getHours

function active(){
    var daysIn = new Date(prompt("Escriba una fecha y hora siguiendo el siguiente formato para saber si hay servicio : mes(inglés) día, año hour(24HR format):minutes:seconds")); //Pedimos al usuario que nos de una fecha y hora para poder decirle si podrá ser atendido, el formato que pide es necesario para que pueda leer los datos de forma correcta.
    var days = daysIn.getDay(); //Aquí obtenemos el día de la semana con un número del 0 al 6, siendo 0 domingo.
    var hourNumber = daysIn.getHours(); //Obtiene la hora de acuerdo a lo que nosotros indicamos en "new Date", en un formato de 24 HRS.

    if (hourNumber >= 9 && hourNumber <= 18 && days >= 1 && days <=6){
        alert("Horario laboral, lo podemos atender."); //Comparamos las horas y los días para saber que estamos dentro del horario de servicio (Lunes a sábado de 9 a 18).
        
    } else if (hourNumber > 0 || hourNumber > 18 || hourNumber <= 24 || hourNumber < 9 && days == 0){
        alert("Fuera de horario, lo sentimos, no podemos atenderlo"); //Si llegamos a colocar alguna hora o día en la que no se atiende se mostrará este mensaje.
        
    } else if (hourNumber > 24 || hourNumber < 0) {
        alert("Ingrese un valor válido (formato 24H)"); //Aquí mostramos este mensaje en caso de que no se haya usado un número dentro del rango de 1 a 24.

    } else if(days < 0 || days > 6){
        alert("Ingrese un valor válido para día"); //Este mensaje se muestra si llegará a pasar que se nos da un valor que no está en el rango de 0 a 6.

    }else {
        alert("Error"); //Este mensaje sale en caso de que se haya ingresado algún valor que no tiene nada que ver con lo que se pidió.
    }
}
active(); //Mandamos a llamar la función para que se ejecuté el código escrito dentro.