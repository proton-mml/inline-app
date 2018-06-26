
page = {}

page.load = function (page, params, closeDrawer) {
    let layout = document.querySelector('.mdl-layout');
    if (closeDrawer && layout.MaterialLayout) layout.MaterialLayout.toggleDrawer();

    $.get(page + ".html", function(data, status) {
        if (status == "success") {
            resp = data.split("{{nav-body-separation}}");
            document.querySelector(".mdl-navigation").innerHTML = resp[0];
            document.getElementById("page-content").innerHTML = resp[1];
            if (window[page]) window[page].load(params);
            window.location.hash = page;
        } else  console.warn('Error retrieving: ' + page);
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
