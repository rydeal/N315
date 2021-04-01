// This is my controller for my app


function initListeners() {
    $("a").click(function(event) {
        let btnId = this.id;
        loadContent(btnId);
    });
}

function loadContent(page)  {
    let pageContent = MODEL.getContent(page);

    $(".content").html(pageContent);

    initListeners();
}

function loadNav() {
    $.each(MODEL.getMainNav(), function(idx, link) {
        $("nav").append(`<a id="${link.path}" href="#">${link.path}</a>`);
    });

    loadContent("home");
}

function loadData() {
    loadNav();
}

$(document).ready(function() {
    MODEL.getData(loadData);
});
