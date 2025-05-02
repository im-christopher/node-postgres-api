var url = "http://localhost:3300/api/users";

// 📌 POST: Insertar usuario
function postUser() {
    var myName = $('#name').val();
    var myEmail = $('#email').val();
    var myAge = $('#age').val();

    var myuser = { name: myName, email: myEmail, age: myAge };

    $.ajax({
        url: url,
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        success: function (data) {
            console.log("Usuario creado:", data);
            getUsers(); // Refrescar la tabla
        },
        data: JSON.stringify(myuser)
    });
}

// 📌 GET: Obtener lista de usuarios
function getUsers() {
    $.getJSON(url, function(json) {
        var htmlTableUsers = '<table border=1>';
        json.forEach(function(item) {
            htmlTableUsers += '<tr>' +
                '<td>' + item.id + '</td>' +
                '<td>' + item.name + '</td>' +
                '<td>' + item.email + '</td>' +
                '<td>' + item.age + '</td>' +
                '</tr>';
        });
        htmlTableUsers += '</table>';
        $('#resultado').html(htmlTableUsers);
    });
}
