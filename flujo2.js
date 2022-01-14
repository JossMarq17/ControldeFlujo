//Part 2

function getDayNumber(){
    var auxJan = parseInt(prompt("Escoge con un número de 0 al 6 el día en que empezó el año, siendo 0 domingo."));
    var auxYear = parseInt(prompt("Escribe un número del 0 al 365 para saber en que día de la semana va a caer: "));

    if (auxYear % 7 == 0 && auxJan == 0){
        alert("Ese día es Domingo");
        return auxDayS = 0;
    } else if (auxYear % 7 == 1 && auxJan == 0){
        alert("Ese día es Lunes");
        return auxDayS = 1;
    } else if (auxYear % 7 == 2 && auxJan == 0){
        alert("Ese día es Martes");
        return auxDayS = 2;
    } else if (auxYear % 7 == 3 && auxJan == 0){
        alert("Ese día es Miércoles");
        return auxDayS = 3;
    } else if (auxYear % 7 == 4 && auxJan == 0){
        alert("Ese día es Jueves");
        return auxDayS = 4;
    } else if (auxYear % 7 == 5 && auxJan == 0){
        alert("Ese día es Viernes");
        return auxDayS = 5;
    } else if (auxYear % 7 == 6 && auxJan == 0){
        alert("Ese día es Sabado");
        return auxDayS = 6;
    }  else if (auxYear % 7 == 0 && auxJan == 1){
        alert("Ese día es Lunes");
        return auxDayS = 1;
    } else if (auxYear % 7 == 1 && auxJan == 1){
        alert("Ese día es Martes");
        return auxDayS = 2;
    } else if (auxYear % 7 == 2 && auxJan == 1){
        alert("Ese día es Miércoles");
        return auxDayS = 3;
    } else if (auxYear % 7 == 3 && auxJan == 1){
        alert("Ese día es Jueves");
        return auxDayS = 4;
    } else if (auxYear % 7 == 4 && auxJan == 1){
        alert("Ese día es Viernes");
        return auxDayS = 5;
    } else if (auxYear % 7 == 5 && auxJan == 1){
        alert("Ese día es Sábado");
        return auxDayS = 6;
    } else if (auxYear % 7 == 6 && auxJan == 1){
        alert("Ese día es Domingo");
        return auxDayS = 0;
    }  else if (auxYear % 7 == 0 && auxJan == 2){
        alert("Ese día es Martes");
        return auxDayS = 2;
    } else if (auxYear % 7 == 1 && auxJan == 2){
        alert("Ese día es Miércoles");
        return auxDayS = 3;
    } else if (auxYear % 7 == 2 && auxJan == 2){
        alert("Ese día es Jueves");
        return auxDayS = 4;
    } else if (auxYear % 7 == 3 && auxJan == 2){
        alert("Ese día es Viernes");
        return auxDayS = 5;
    } else if (auxYear % 7 == 4 && auxJan == 2){
        alert("Ese día es Sábado");
        return auxDayS = 6;
    } else if (auxYear % 7 == 5 && auxJan == 2){
        alert("Ese día es Domingo");
        return auxDayS = 0;
    } else if (auxYear % 7 == 6 && auxJan == 2){
        alert("Ese día es Lunes");
        return auxDayS = 1;
    }  else if (auxYear % 7 == 0 && auxJan == 3){
        alert("Ese día es Miércoles");
        return auxDayS = 3;
    } else if (auxYear % 7 == 1 && auxJan == 3){
        alert("Ese día es Jueves");
        return auxDayS = 4;
    } else if (auxYear % 7 == 2 && auxJan == 3){
        alert("Ese día es Viernes");
        return auxDayS = 5;
    } else if (auxYear % 7 == 3 && auxJan == 3){
        alert("Ese día es Sábado");
        return auxDayS = 6;
    } else if (auxYear % 7 == 4 && auxJan == 3){
        alert("Ese día es Domingo");
        return auxDayS = 0;
    } else if (auxYear % 7 == 5 && auxJan == 3){
        alert("Ese día es Lunes");
        return auxDayS = 1;
    } else if (auxYear % 7 == 6 && auxJan == 3){
        alert("Ese día es Martes");
        return auxDayS = 2;
    }  else if (auxYear % 7 == 0 && auxJan == 4){
        alert("Ese día es Jueves");
        return auxDayS = 4;
    } else if (auxYear % 7 == 1 && auxJan == 4){
        alert("Ese día es Viernes");
        return auxDayS = 5;
    } else if (auxYear % 7 == 2 && auxJan == 4){
        alert("Ese día es Sábado");
        return auxDayS = 6;
    } else if (auxYear % 7 == 3 && auxJan == 4){
        alert("Ese día es Domingo");
        return auxDayS = 0;
    } else if (auxYear % 7 == 4 && auxJan == 4){
        alert("Ese día es Lunes");
        return auxDayS = 1;
    } else if (auxYear % 7 == 5 && auxJan == 4){
        alert("Ese día es Martes");
        return auxDayS = 2;
    } else if (auxYear % 7 == 6 && auxJan == 4){
        alert("Ese día es Miércoles");
        return auxDayS = 3;
    }  else if (auxYear % 7 == 0 && auxJan == 5){
        alert("Ese día es Viernes");
        return auxDayS = 5;
    } else if (auxYear % 7 == 1 && auxJan == 5){
        alert("Ese día es Sábado");
        return auxDayS = 6;
    } else if (auxYear % 7 == 2 && auxJan == 5){
        alert("Ese día es Domingo");
        return auxDayS = 0;
    } else if (auxYear % 7 == 3 && auxJan == 5){
        alert("Ese día es Lunes");
        return auxDayS = 1;
    } else if (auxYear % 7 == 4 && auxJan == 5){
        alert("Ese día es Martes");
        return auxDayS = 2;
    } else if (auxYear % 7 == 5 && auxJan == 5){
        alert("Ese día es Miércoles");
        return auxDayS = 3;
    } else if (auxYear % 7 == 6 && auxJan == 5){
        alert("Ese día es Jueves");
        return auxDayS = 4;
    }  else if (auxYear % 7 == 0 && auxJan == 6){
        alert("Ese día es Sábado");
        return auxDayS = 6;
    } else if (auxYear % 7 == 1 && auxJan == 6){
        alert("Ese día es Domingo");
        return auxDayS = 0;
    } else if (auxYear % 7 == 2 && auxJan == 6){
        alert("Ese día es Lunes");
        return auxDayS = 1;
    } else if (auxYear % 7 == 3 && auxJan == 6){
        alert("Ese día es Martes");
        return auxDayS = 2;
    } else if (auxYear % 7 == 4 && auxJan == 6){
        alert("Ese día es Miércoles");
        return auxDayS = 3;
    } else if (auxYear % 7 == 5 && auxJan == 6){
        alert("Ese día es Jueves");
        return auxDayS = 4;
    } else if (auxYear % 7 == 6 && auxJan == 6){
        alert("Ese día es Viernes");
        return auxDayS = 5;
    }  else {
        alert("Error");
    }

}
getDayNumber();