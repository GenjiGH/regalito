$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var message = $("#message");

    envelope.click(function() {
        open();
    });

    btn_open.click(function() {
        open();
    });

    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open").removeClass("close");
        message.fadeIn(500);  // Muestra el mensaje con un efecto
    }

    function close() {
        envelope.addClass("close").removeClass("open");
        message.fadeOut(500); // Oculta el mensaje con un efecto
    }
});