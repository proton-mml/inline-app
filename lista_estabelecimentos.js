var estabelecimentos_mock = ['immundo\'s', 'porco', 'abjeto', 'nojentto'];

var estabelecimentos = estabelecimentos_mock; // Fazer certo depois

function lista_estabelecimentos() {
    var lista = $('#lista-estabelecimentos');

    var itens = estabelecimentos.map((nome, i, e) => {
        var item = $('<li>').addClass('mdl-list__item');
        item.append($('<span>').addClass('mdl-list__item-primary-content')
                    .append($('<i>').addClass('material-icons mdl-list__item-icon').text('store_mall_directory'))
                    .append(nome));
        return item;
    });
        
    lista.append(itens);
}

lista_estabelecimentos();
