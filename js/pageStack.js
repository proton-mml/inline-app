
pageStack = {};

pageStack.stack = [];

pageStack.push = function (p) {
    pageStack.stack.push(p);
}

pageStack.back = function () {
    if (pageStack.stack.length > 1) {
        _ = pageStack.stack.pop();
        p = pageStack.stack.pop();
        if (p) page.load(p.page, p.params);
    }
}

pageStack.reload = function () {
    if (pageStack.stack.length > 1) {
        p = pageStack.stack.pop();
        if (p) page.load(p.page, p.params);
    }
}

pageStack.clean = function () {
    pageStack.stack = [];
}
