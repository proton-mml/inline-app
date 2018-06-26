
sconn = {};

sconn.baseURL = "http://192.168.43.95:3300";

sconn.get = function (route, func) {
    $.get(sconn.baseURL + route, (data, status) => {
        if (status == "success") {
            resp = JSON.parse(data);
            func(resp);
        } else console.warn('Error retrieving: ' + route);
    }, "text");
};

sconn.post = function (route, body, func) {
    $.post(sconn.baseURL + route, body, (data, status) => {
        if (status == "success") {
            resp = JSON.parse(data);
            func(resp);
        } else console.warn('Error retrieving: ' + route);
    }, "text");
};
