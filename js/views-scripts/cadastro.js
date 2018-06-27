cadastro = {}

cadastro.submit = function() {
    if($('#senha').val() != $('#confirma_senha').val()) {
        page.showToast('A verificação não coincide com a senha.');
        return;
    };

    // if (($('#nome').val().length < 2) ||
    //     ($('#email').val().length < 2) ||
    //     ($('#celular').val().length < 2) ||
    //     ($('input[name=tipo_prioridade]:checked').val().length < 2) ||
    //     ($('#senha').val().length < 2))
    //     page.showToast('Verifique se os seus dados foram digitados corretamente');


    let cadastro_usuario = {
        nome:       $('#nome').val(),
        email:      $('#email').val(),
        celular:    $('#celular').val(),
        prioridade: $('input[name=tipo_prioridade]:checked').val(),
        senha:      $('#senha').val(),
    };

    sconn.post("/cadastrar", cadastro_usuario, console.log, console.log);
}

