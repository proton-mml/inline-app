
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

fila.id = "";

fila.load = function (params) {
    // fila.showInfo(fil, params.estabelecimento);
    fila.id = params.fila;
    sconn.post("/fila", {id: params.fila}, (data) => {
        fila.showInfo(data.answer, params.estabelecimento);
        if (fila.cronologica) {
            sconn.post("/fila/posicao", {id_fila: params.fila, email: sconn.getLoggedUser()}, (data2) => {
                if (data2.success) {
                    if (data2.answer.posicao) {
                        $("#fora").hide();
                        $("#dentro").show();
                        $("#posicao").html(data2.answer.posicao);
                    }
                } else page.showToast(data2.error);
            });
        }
    });
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
    if (f.agendada) $("#submit_entrar").hide();
}

fila.getIn = function () {
    sconn.post("/fila/entrar", {id_fila: fila.id, email: sconn.getLoggedUser()}, (data) => {
        if (data.success) {
            $("#fora").hide();
            $("#dentro").show();
            $("#posicao").html(data.answer.posicao);
        }
        else page.showToast(data.error);
    });
}

fila.getOut = function () {
    sconn.post("/fila/sair", {id_fila: fila.id, email: sconn.getLoggedUser()}, (data) => {
        if (data.success) {
            $("#fora").show();
            $("#dentro").hide();
            page.showToast("Você saiu da fila");
            $("nro_pessoas").html(Number($("#nro_pessoas").html()) - 1);
        }
        else page.showToast(data.error);
    });
}
