var MODEL = (function() {

    var _allData = {};

    var _getData = function(callback) {
        $.getJSON("data/data.json", function(data) {})
        .done(function(data) {
            _allData = data;

            callback();
        });

    };

    var _getMainNav = function() {
        return _allData.mainNav;
    };

    var _getContent = function(pageName) {
        var content = "";
        $.each(_allData.pages, function(idx, page) {
            if(pageName === page.name) {
                content = page.content;
            }
        });
        return content;
    }

    return {
        getData: _getData,
        getMainNav: _getMainNav,
        getContent: _getContent
    };

})();
