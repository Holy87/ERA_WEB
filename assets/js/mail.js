function send_message(e) {
    var button = $("#submitter");
    button.prop('disabled', "diabled");
   //button.html('<i class="fa fa-circle-o-notch fa-spin fa-fw"></i> Invio in corso...');
    $.ajax({
        type: 'post',
        url: 'messaggio.php',
        dataType: 'json',
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