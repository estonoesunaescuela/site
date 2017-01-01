const RETURN_CODES = [100, 200, 300, 400, 500];
const ALERT_TYPES = ["alert-warning", "alert-success", "alert-warning", "alert-danger", "alert-danger"];

$(function(){
    $("[data-hide]").on("click", function(){
        $("." + $(this).attr("data-hide")).hide();
    });
});

$(document).ready(function(){
    $('#inputForm').on("submit", function(event) {
        event.preventDefault();
        let data = $(this).serialize();
        $.ajax({
                url: "https://script.google.com/macros/s/AKfycbxlj0pvtXo0cjOuGkpZvhoHRXdkTqvCiJzgnNpPIfV-LiNB_jk/exec",
                method: "post",
                dataType: "json",
                data: data
            })
            .done(function(msg) {
                //Do sth and present to the user valid information, clean form;
                var code = msg.return_code;
                var index = RETURN_CODES.indexOf(code);
                $("#alert-message").removeClass("alert-warning alert-success alert-danger").addClass(ALERT_TYPES[index]);
                var message = msg.return_message;
                $("#alert-text").text(message);
                $("#alert-message").show();
            })
            .fail(function(jqXHR) {
                console.log("Fails: " + jqXHR);
            });

    });
});


