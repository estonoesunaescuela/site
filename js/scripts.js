$(document).ready(function(){

    $('#inputForm').on("submit", function(event) {
        event.preventDefault();
        var data = $(this).serialize();
        console.log(data);
        $.ajax({
                url: "https://script.google.com/macros/s/AKfycbxlj0pvtXo0cjOuGkpZvhoHRXdkTqvCiJzgnNpPIfV-LiNB_jk/exec",
                method: "post",
                dataType: "json",
                data: data
            })
            .done(function(msg) {
                //Do sth and present to the user valid information, clean form;
                console.log("Data retrieved: " + msg);
            })
            .fail(function(jqXHR) {
                console.log("Fails: " + jqXHR);
            });

    });
};
