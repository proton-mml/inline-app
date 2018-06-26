
sconn = {};

sconn.baseURL = "http://35.231.149.80:3300";

sconn.get = function (route, succ_callback, err_callback) {
    $.get({
        url: sconn.baseURL + route,
        crossDomain: true,
        dataType: "text",
        xhrFields: {
            withCredentials: true
        },
        success: (data) => {
            resp = JSON.parse(data);
            succ_callback(resp);
        },
        error: (_, __, err) => {
            console.log ("Error in sconn, for route: " + route + " #Err: " + err);
            if (err_callback) err_callback(_, __, err);
        }
    });
};

sconn.post = function (route, body, succ_callback, err_callback) {
    $.post({
        url: sconn.baseURL + route,
        crossDomain: true,
        data: body,
        dataType: "text",
        xhrFields: {
            withCredentials: true
        },
        success: (data) => {
            resp = JSON.parse(data);
            succ_callback(resp);
        },
        error: (_, __, err) => {
            console.log ("Error in sconn, for route: " + route + " #Err: " + err);
            if (err_callback) err_callback(_, __, err);
        }
    });
};
