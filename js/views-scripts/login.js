
login = {}

login.submit = function () {
    let email = $("#email").val();
    let senha = $("#senha").val();
    sconn.get("/autorizar", {email: email, senha: senha}, (answer) => {
        console.log(answer);
    });
}
