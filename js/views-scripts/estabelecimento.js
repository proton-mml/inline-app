
estabelecimento = {}

estabelecimento.load = function(params) {
    $("#title").html(params.nome);
    estabelecimento.nome = params.nome;
    estabelecimento.email = params.email;
    sconn.post("/avaliacoes", {email: params.email}, (data) => {
        estabelecimento.lista_avaliacoes(data.answer);
    });

    sconn.post('/estabelecimento', {email_estabelecimento: params.email},
               (data) => estabelecimento.showInfo(data.answer));

    sconn.post('/filas_ativas', {email: params.email},
              (data) => {
                  estabelecimento.showFilas(data.answer)
              });

    // estabelecimento.showFilas(fils);
};

estabelecimento.showInfo = function(estabelecimento) {
    var endereco = estabelecimento.endereco;
    $('#logradouro').html(endereco.logradouro);
    $('#endnumero').html(endereco.numero);
    $('#complemento').html(endereco.complemento ? (' ' + endereco.complemento) : '');
    $('#cidade').html(endereco.cidade);
    $('#estado').html(endereco.estado);
}

estabelecimento.lista_avaliacoes = function(avs) {
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

estabelecimento.showFilas = function(filas) {
    var lista = $('#filas');
    var itens = filas.map((fila, i, e) => {
        let type = (fila.cronologica ? "Cronológica" : "Agendada") + ": ";
        let tamanho = " Tamanho: " + fila.tamanho;
        var item = $('<li class="clicker" onclick="page.load(\'fila\', {\'fila\': \'' + fila._id + '\', \'estabelecimento\':  \'' + estabelecimento.nome + '\'})">').addClass('mdl-list__item');
        item.append($('<span>').addClass('mdl-list__item-primary-content')
                    .append($("<b>").text(type)).append(tamanho));
        return item;
    });
    lista.append(itens);
}

estabelecimento.submitAvaliacao = function() {
    var num_estrelas = $("#select_estrelas").val();
    var comentario = $("#texto_comentario").val();

    sconn.post('/avalia', {
        estrelas: num_estrelas,
        comentario: comentario,
        email_estabelecimento: estabelecimento.email,
        email_cliente: sconn.user_email
    });

    page.load('estabelecimento', {nome: estabelecimento.nome,
                                  email: estabelecimento.email});
}
