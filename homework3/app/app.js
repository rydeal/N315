function initListensers() {
    $("#nav nav a").click(function() {
        var btnId = this.id;
        MODEL.getView(btnId);
    });
}


function initSite() {
    $.get('views/nav.html', function(nav) {
        $("#nav").html(nav);
        initListensers();
    });

    $.get('views/home/home.html', function(data) {
        $("#app").html(data);
    });

    $.get('views/footer.html', function(data) {
        $("#footer").html(data);
    });
}


$(document).ready(function() {
    initSite();
});
