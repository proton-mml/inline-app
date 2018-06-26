
login = {}

login.submit = function () {
    let email = $("#email").val();
    let senha = $("#senha").val();
    sconn.post("/autorizar", {email: email, senha: senha}, (answer) => {
        console.log(answer);
    });
}
