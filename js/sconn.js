sconn = {};

sconn.token = "";
// sconn.baseURL = "http://35.231.149.80:3300";
sconn.baseURL = "http://localhost:3300";

sconn.get = function (route, succ_callback) {
    let body = {token: sconn.token};
    $("#loading-overlay").show();
    $.get({
        url: sconn.baseURL + route,
        dataType: "text",
        data: body,
        success: (data) => {
            $("#loading-overlay").hide();
            resp = JSON.parse(data);
            if (resp.success) succ_callback(resp);
            else {
                if (resp.error == "token invalido") sconn.logout(false);
                else succ_callback(resp);
            }
        },
        error: (_, errstr, __) => {
            $("#loading-overlay").hide();
            console.log ("Error in sconn, for route: " + route + " #Err: " + errstr);
            page.showToast("Falha na comunicação com servidor: " + errstr);
        }
    });
};

sconn.post = function (route, body, succ_callback) {
    body.token = sconn.token;
    $("#loading-overlay").show();
    $.post({
        url: sconn.baseURL + route,
        data: body,
        dataType: "text",
        success: (data) => {
            $("#loading-overlay").hide();
            resp = JSON.parse(data);
            if (resp.success) succ_callback(resp);
            else {
                if (resp.error == "token invalido") sconn.logout(false);
                else succ_callback(resp);
            }
        },
        error: (_, errstr, __) => {
            $("#loading-overlay").hide();
            console.log ("Error in sconn, for route: " + route + " #Err: " + errstr);
            page.showToast("Falha na comunicação com servidor: " + errstr);
        }
    });
};

sconn.login = function (email, senha) {
    sconn.post("/autorizar", {email: email, senha: senha}, (answer) => {
        if (answer.success) {
            sconn.token = answer.token;
            sconn.user_email = email;
            localStorage.setItem("token", sconn.token);
            localStorage.setItem("email", sconn.user_email);
            pageStack.clean();
            page.load('empresas_disponiveis');
        }
        else {
            page.showToast("Erro: " + answer.error);
        }
    });
}

sconn.getLoggedUser = function () {
    return sconn.user_email
}

sconn.logout = function (closeDrawer) {
    sconn.token = "";
    sconn.user_email = email = "";
    localStorage.removeItem ("token");
    localStorage.removeItem ("email");
    pageStack.clean();
    page.load("login", {}, closeDrawer);
    page.showToast("Você está deslogado");
}

sconn.token = localStorage.getItem("token");


if (sconn.token) {
    pageStack.clean();
    sconn.user_email = localStorage.getItem("user_email");
    page.load('empresas_disponiveis');
} else {
    page.load("login"); // debug
}
