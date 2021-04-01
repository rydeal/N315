function init() {
    $(".navicon").click(function() {
        $("nav").toggleClass("navMobileView");
        if($(".links").css("display") == "none") {
            $(".links").css("display", "flex"); 
        } else {
            $(".links").css("display", "none");
        }
    });
}

$(document).ready(init());