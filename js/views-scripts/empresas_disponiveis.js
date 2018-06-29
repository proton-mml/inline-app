
empresas_disponiveis = {}

empresas_disponiveis.load = function () {
    sconn.post("/empresas", {}, (data) => {
        empresas_disponiveis.lista(data.answer);
    });
}

empresas_disponiveis.lista = function (empresas) {
    var lista = $('#lista-empresas');

    var itens = empresas.map((e, i, k) => {
        var item = $('<li class="clicker" onclick="page.load(' + "'estabelecimentos_disponiveis', {email: '" + e.email +  "'})\">").addClass('mdl-list__item');
        item.append($('<span>').addClass('mdl-list__item-primary-content')
                    .append($('<i>').addClass('material-icons mdl-list__item-icon').text('store_mall_directory'))
                    .append(e.nome));
        return item;
    });

    lista.append(itens);
}
