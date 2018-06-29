
function lista_avaliacoes(avs) {
}


estabelecimento = {}

estabelecimento.load = function (params) {
    $("#title").html(params.nome);
    sconn.post("/avaliacoes", {email: params.email}, (avaliacoes) => {
        estabelecimento.lista_avaliacoes(avaliacoes);
    });

    sconn.post('/estabelecimento', {email_estabelecimento: params.email},
               (data) => estabelecimento.showInfo(data.answer));
};

estabelecimento.showInfo = function (estabelecimento) {
    var endereco = estabelecimento.endereco;
    $('#logradouro').html(endereco.logradouro);
    $('#endnumero').html(endereco.numero);
    $('#complemento').html(endereco.complemento ? (' ' + endereco.complemento) : '');
    $('#cidade').html(endereco.cidade);
    $('#estado').html(endereco.estado);
}

// estabelecimento.endereco = function (end) {

// }

estabelecimento.lista_avaliacoes = function (avs) {
    var lista = $('#avaliacoes');
    var itens = avs.map((av, i, e) => {
        var item = $('<li>').addClass('mdl-list__item');
        var stars = $('<span>').addClass('stars');
        for (i = 0; i < av.estrelas; i++) stars.append($('<i>').addClass('material-icons mdl-list__item-icon no-margin-right').text('star_rate'));
        for (i = 0; i < 5 - av.estrelas; i++) stars.append($('<i>').addClass('material-icons mdl-list__item-icon no-margin-right').text('star_border'));
        item.append($('<span>').addClass('mdl-list__item-primary-content')
                    .append(stars).append(" " + av.comentario + " ").append($('<b>').addClass('faded').text(" - " + av.nome)));
        return item;
    });

    lista.append(itens);
} ;

estabelecimento.lista_filas = function(filas){
    var lista = $('#filas');
    var itens = filas.map((fila, i, e) => {
        var item = $('<li>').addClass('mdl-list__item');
        var stars = $('<span>');
        item.append($('<span>').addClass('mdl-list__item-primary-content')
                    .append());
        return item;
    });

    lista.append(itens);
}
