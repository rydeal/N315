var MODEL = (function() {

    var _getView = function(viewName){
        $.get(`/views/${viewName}/${viewName}.html`, function(data) {
            $("#app").html(data);
        });
    };


    return {
        getView: _getView,
    };
})();
