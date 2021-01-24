function send_message(e) {
    let button = $("#submitter");
    button.prop('disabled', "diabled");
    button.html('Invio in corso...');
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
            button.html("Invia di nuovo");
        }
    });
    e.preventDefault();
}

$(document).ready(function() {
    $('#messageForm').submit(function (e) {
        send_message(e);
    });

    var mailbox = $('.generate-mail');
    mailbox.click(function (evt) {
        if (mailbox.attr('href') !== '#') return;
        evt.preventDefault();
        mailbox.html('Un attimo...');
        $.ajax({
            type: 'get',
            url: 'show_mail.php',
            success: function(resp) {
                if (resp.ok) {
                    mailbox.html(resp.body);
                    mailbox.attr('href', 'mailto:'+resp.body);
                } else {
                    mailbox.html('Errore. Per favore, usa il modulo di contatto');
                }
            }
        })
    });

});