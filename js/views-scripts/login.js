
login = {}

login.submit = function () {
    let email = $("#email").val();
    let senha = $("#senha").val();
    sconn.login (email, senha);
    return false;
}
