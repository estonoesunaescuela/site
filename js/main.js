$.ajax({
        url: "https://script.google.com/macros/s/AKfycbxlj0pvtXo0cjOuGkpZvhoHRXdkTqvCiJzgnNpPIfV-LiNB_jk/exec",
        method: "post",
        dataType: "json",
        data: { email: "ground.contact@gmail.com", user_id: 123456 }
    })
    .done(function(msg) {
        console.log("Data retrieved: " + msg);
    })
    .fail(function(jqXHR) {
        console.log("Fails: " + jqXHR);
    });