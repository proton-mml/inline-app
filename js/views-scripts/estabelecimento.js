
estabelecimento = {}

estabelecimento.load = function (params) {
    $("#title").html(params.nome);
    sconn.post("/avaliacoes", {email: params.email}, (avaliacoes) => {
        estabelecimento.lista(avaliacoes);
    });
};

estabelecimento.lista = function (avs) {
    var lista = $('#avaliacoes');
    var itens = avs.map((av, i, e) => {
        var item = $('<li>').addClass('mdl-list__item');
        var stars = $('<span>');
        for (i = 0; i < av.estrelas; i++) stars.append($('<i>').addClass('material-icons mdl-list__item-icon no-margin-right').text('star_rate'));
        for (i = 0; i < 5 - av.estrelas; i++) stars.append($('<i>').addClass('material-icons mdl-list__item-icon no-margin-right').text('star_border'));
        item.append($('<span>').addClass('mdl-list__item-primary-content')
                    .append(stars).append(" " + av.comentario + " ").append($('<b>').addClass('faded').text(" - " + av.nome)));
        return item;
    });

    lista.append(itens);
} ;
