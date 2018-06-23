
page = {}

page.load = function (route) {
    let layout = document.querySelector('.mdl-layout');
    if (layout.MaterialLayout) layout.MaterialLayout.toggleDrawer();

    $.get(route, function(data, status) {
        if (status == "success") {
            resp = data.split("{{nav-body-separation}}");
            document.querySelector(".mdl-navigation").innerHTML = resp[0];
            document.getElementById("page-content").innerHTML = resp[1];
        } else  console.warn('Error retrieving offline.html');
    }, "text");
}

page.hideOffilineWarning = function() {
    $("#offline-content").hide();
    $("#page-content").show();
}

page.showOfflineWarning= function() {
    $("#offline-content").show();
    $("#page-content").hide();
}
