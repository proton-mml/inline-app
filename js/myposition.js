
myposition = {}

myposition.id_fila =  "";

myposition.startTracking = function (id_fila) {
    localStorage.setItem("myposition_inline", id_fila);
    myposition.id_fila = id_fila;
    myposition.traking = window.setInterval(function () {
        sconn.post_unnoticed("/fila/posicao", {id_fila: myposition.id_fila, email: sconn.getLoggedUser()},
            (data) => {
                if (data.success) {
                    if (data.answer.posicao == -1) {
                        localStorage.removeItem("myposition_inline");
                        myposition.id_fila = "";
                        window.alert ("Você é o proximo na fila e está sendo chamado!");
                    }
                    else if (data.answer.posicao == undefined) {
                        localStorage.removeItem("myposition_inline");
                        myposition.id_fila = "";
                    }
                    else {
                        if (page.current == "fila") {
                            $("#posicao").html(data.answer.posicao);
                        }
                    }
                }
            });
    }, 30000);
};

myposition.stopTracking = function (id_fila) {
    if (myposition.traking) window.clearInterval(myposition.traking);
    localStorage.removeItem("myposition_inline");
    myposition.id_fila = "";
};


myposition.id_fila = localStorage.getItem("myposition_inline");
if (myposition.id_fila) myposition.startTracking (myposition.id_fila);
