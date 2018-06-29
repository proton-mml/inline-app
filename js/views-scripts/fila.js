
fila = {}

// fil = {
//     "_id": 1,
//     "tamanho": 2,
//     "cronologica": [],
//     "agendada": [1,2],
//     "tamanho": 5,
//     'data_hora_fim': "fim",
//     "data_hora_inicio": "comeco",
// }

fila.load = function (params) {
    sconn.post("/fila", {id: params.fila}, (data) => {
        fila.showInfo(data.answer, params.estabelecimento);
    });
    // fila.showInfo(fil, params.estabelecimento);
};

fila.showInfo = function (f, e) {
    let endereco = estabelecimento.endereco;
    let inicio = new Date(f.data_hora_inicio).toLocaleString();
    let fim = new Date(f.data_hora_fim).toLocaleString();
    $("#title").html(f.cronologica? "Fila Cronológica" : "Fila Agendada");
    $('#no_pessoas').append($("<b>").text("Tamanho: ")).append(f.tamanho);
    $('#nome_estabelecimento').append($("<b>").text("Estabelecimento: ")).append(e);
    $('#data_hora_inicio').append($("<b>").text("Inicio: ")).append(inicio);
    $('#data_hora_fim').append($("<b>").text("Fim: ")).append(fim);
}

fila.getIn = function () {
    // FALTA ENTRAR NA FILA DE VERDADE
    $("#fora").hide();
    $("#dentro").show();
}

fila.getOut = function () {
    // FALTA SAIR DA FILA DE VERDADE
    $("#fora").show();
    $("#dentro").hide();
}
