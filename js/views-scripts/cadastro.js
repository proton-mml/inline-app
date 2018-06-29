cadastro = {}

cadastro.submit = function() {
    if($('#senha').val() != $('#confirma_senha').val()) {
        page.showToast('A verificação não coincide com a senha.');
        return;
    };

    let cadastro_usuario = {
        nome:       $('#nome').val(),
        email:      $('#email').val(),
        celular:    $('#celular').val(),
        prioridade: $('input[name=tipo_prioridade]:checked').val(),
        senha:      $('#senha').val(),
    };

    if ((cadastro_usuario.nome.length < 2) ||
        (cadastro_usuario.email.length < 2) ||
        (cadastro_usuario.celular.length < 2) ||
        (cadastro_usuario.senha.length < 2)) {
        page.showToast('Verifique se os seus dados foram digitados corretamente');
        return;
    }

    sconn.post("/cadastrar", cadastro_usuario, (resp) => {
        if(resp.success) {
            page.showToast('Cadastro realizado com sucesso');
            page.load('login');
        } else page.showToast('Algo deu errado');
    });
}
