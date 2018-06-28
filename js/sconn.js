sconn = {};

sconn.token = "";
sconn.baseURL = "http://35.231.149.80:3300";

sconn.get = function (route, succ_callback, err_callback) {
    let body = {token: sconn.token};
    $.get({
        url: sconn.baseURL + route,
        dataType: "text",
        data: body,
        success: (data) => {
            resp = JSON.parse(data);
            succ_callback(resp);
        },
        error: (_, errstr, __) => {
            console.log ("Error in sconn, for route: " + route + " #Err: " + errstr);
            if (err_callback) err_callback(_, errstr, __);
        }
    });
};

sconn.post = function (route, body, succ_callback, err_callback) {
    body.token = sconn.token;
    $.post({
        url: sconn.baseURL + route,
        data: body,
        dataType: "text",
        success: (data) => {
            resp = JSON.parse(data);
            succ_callback(resp);
        },
        error: (_, errstr, __) => {
            console.log ("Error in sconn, for route: " + route + " #Err: " + errstr);
            if (err_callback) err_callback(_, errstr, __);
        }
    });
};

sconn.login = function (email, senha, succ_callback) {
    sconn.post("/autorizar", {email: email, senha: senha}, (answer) => {
        if (answer.success) {
            sconn.token = answer.token;
            localStorage.setItem("token", sconn.token);
            pageStack.clean();
            page.load('empresas_disponiveis');
        }
        else {
            page.showToast("Erro: " + answer.error);
        }
    });
}

sconn.logout = function () {
    sconn.token = "";
    localStorage.removeItem ("token");
    page.load("login", {}, true);
    page.showToast("Você está deslogado");
}

sconn.token = localStorage.getItem("token");
if (sconn.token) {
    pageStack.clean();
    page.load('empresas_disponiveis');
} else {
    page.load("login");
}
