
pageStack = {};

pageStack.stack = [];

pageStack.push = function (p) {
    pageStack.stack.push(p);
}

pageStack.back = function () {
    _ = pageStack.stack.pop();
    p = pageStack.stack.pop();
    if (p) page.load(p.page, p.params);
}
