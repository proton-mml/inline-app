var empresas_mock = {
    'fanfa': ['fanfa fafafafafa far better'],
    'sujinhos': ['immundo\'s', 'porco', 'abjeto', 'nojentto'],
    'dentinho': ['tooth'],
    'silvio santos': ['maoe', 'milhão', 'quem quer dinheiro', 'Aviãozinho']
};

var empresas_estabelecimentos = empresas_mock;   // Substituir pelas reais

function lista_estabelecimentos(empresas, item_empresa) {
    var estabelecimentos = empresas[empresa];

    var sub_itens = estabelecimentos.map((nome, i, e) => {
        var sub_item = $('<li>').addClass('');
    });
}

function lista_empresas() {
    var lista = $('#lista-empresas');

    var itens = Object.keys(empresas_estabelecimentos).map((nome, i, e) => {
        var item = $('<li>').addClass('mdl-list__item');
        item.append($('<span>').addClass('mdl-list__item-primary-content')
                    .append($('<i>').addClass('material-icons mdl-list__item-icon').text('store_mall_directory'))
                    .append(nome));
        return item;
    });

    lista.append(itens);
}

lista_empresas();
