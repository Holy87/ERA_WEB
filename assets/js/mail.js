function send_message(e) {
    e.preventDefault();
    let button = $("#submitter");
    button.prop('disabled', "diabled");
    button.val('Invio in corso...');
    console.log('prova...');
    $.ajax({
        type: 'post',
        url: 'messaggio.php',
        data: $("#messageForm").serialize(),
        success: function (raw_response) {
            let response = JSON.parse(raw_response);
            if (response.ok)
                alert("Messaggio inviato correttamente");
            else
                alert("C'è stato un errore nell'invio del messaggio. Per favore, riprova");
            button.removeAttr('disabled');
            button.val("Invia di nuovo");
        }
    });
}

$(document).ready(function() {
    $('#messageForm').submit(function (e) {
        send_message(e);
    });

    let mailbox = $('.generate-mail');
    mailbox.click(function (evt) {
        if (mailbox.attr('href') !== '#') return;
        evt.preventDefault();
        mailbox.html('Un attimo...');
        let resp = atob("aW5mb0BlcmFhc2NlbnNvcmkuaXQ=");
        mailbox.html(resp);
        mailbox.attr('href', 'mailto:'+resp);
        // $.ajax({
        //     type: 'get',
        //     url: 'show_mail.php',
        //     success: function(resp) {
        //         mailbox.html(resp);
        //         mailbox.attr('href', 'mailto:'+resp);
        //     }
        // })
    });

});