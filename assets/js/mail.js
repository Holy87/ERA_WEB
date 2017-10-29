function send_message(e) {
    var button = $("#submitter");
    button.prop('disabled', "diabled");
   //button.html('<i class="fa fa-circle-o-notch fa-spin fa-fw"></i> Invio in corso...');
    console.log($("#messageForm").serialize());
    $.ajax({
        type: 'post',
        url: 'http://www.francescobosso.altervista.org/era/messaggio.php',
        dataType: 'jsonp',
        crossDomain: true,
        jsonpCallback: 'result',
        data: $("#messageForm").serialize(),
        success: function (response) {
            if (response.ok)
                alert("Messaggio inviato correttamente");
            else
                alert("C'è stato un errore nell'invio del messaggio. Per favore, riprova");
            //button.html('Invia il messaggio');
            button.removeAttr('disabled');
        }

        }
    );
    e.preventDefault();
}

$(document).ready(function() {
    $('#messageForm').submit(function (e) {
        send_message(e);
    })

});