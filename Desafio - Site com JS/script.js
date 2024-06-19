var intervaloTimer;

function iniciarTimer(duracao, display) {
    var timer = duracao * 60;
    clearInterval(intervaloTimer);

    intervaloTimer = setInterval(function() {
        var horas = parseInt(timer / 3600, 10);
        var minutos = parseInt((timer % 3600) / 60, 10);
        var segundos = parseInt(timer % 60, 10);

        horas = horas < 10 ? "0" + horas : horas;
        minutos = minutos < 10 ? "0" + minutos : minutos;
        segundos = segundos < 10 ? "0" + segundos : segundos;

        display.textContent = horas + ":" + minutos + ":" + segundos;

        if (--timer < 0) {
            clearInterval(intervaloTimer);
            timer = 0;
        }
    }, 1000);
}

document.getElementById("tempoTimer").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var duracao = parseInt(document.getElementById("minutos").value, 10);
    var display = document.getElementById("display");
    
    iniciarTimer(duracao, display);
});
