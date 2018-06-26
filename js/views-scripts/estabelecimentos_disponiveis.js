
estabelecimentos_disponiveis = {}

estabelecimentos_disponiveis.load = function (params) {
    sconn.post("/estabelecimentos", {"email": params.email},  (estabelecimentos) => {
        estabelecimentos_disponiveis.lista(estabelecimentos);
    });
}

estabelecimentos_disponiveis.lista = function (estabelecimentos) {
    var lista = $('#lista-estabelecimentos');

    var itens = estabelecimentos.map((est, i, e) => {
        var item = $('<li class="clicker">').addClass('mdl-list__item');
        item.append($('<span>').addClass('mdl-list__item-primary-content')
                    .append($('<i>').addClass('material-icons mdl-list__item-icon').text('store_mall_directory'))
                    .append(est.email));
        return item;
    });

    lista.append(itens);
}
