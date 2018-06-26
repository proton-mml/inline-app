
sconn = {}

sconn.baseURL = "http://35.231.149.80:3300";

sconn.get = function (route, func) {
    $.get(sconn.baseURL + route, (data, status) => {
        if (status == "success") {
            resp = JSON.parse(data);
            func(resp);
        } else console.warn('Error retrieving offline.html');
    }, "text");
};

sconn.post = function (route, body, func) {
    $.post(sconn.baseURL + route, body, (data, status) => {
        if (status == "success") {
            resp = JSON.parse(data);
            func(resp);
        } else console.warn('Error retrieving offline.html');
    }, "text");
};
