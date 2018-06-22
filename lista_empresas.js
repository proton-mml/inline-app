var empresas_mock = ['fanfa', 'sujinhos', 'dentinho', 'silvio santos'];

function lista_empresas() {
    lista = $('#lista-empresas');

    empresas = empresas_mock;

    itens = empresas.map((nome, i, empresas) => {
        item = $('<li>').addClass('mdl-list__item');
        item.append($('<span>').addClass('mdl-list__item-primary-content')
                    .append($('<i>').addClass('material-icons mdl-list__item-icon').text('store_mall_directory'))
                    .append(nome));
        return item;
    });

    lista.append(itens);
}

lista_empresas();
