
login = {}

login.submit = function () {
    let email = $("#email").val();
    let senha = $("#senha").val();
    sconn.post("/autorizar", {email: email, senha: senha}, (answer) => {
        console.log(answer);
        if (answer.success) {
            sconn.token = answer.token;
            pageStack.clean();
            page.load('empresas_disponiveis');
        }
        else {
            page.showToast("Erro: " + answer.error);
        }
    });
    return false;
}
