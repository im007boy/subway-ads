/**
 * Date: 13-1-16
 * Desc:
 */

require.config({
    urlArgs: "",
    baseUrl: 'js/'
});

requireScript = function (scripts, callback) {
    var title = document.title;
    var total = scripts.length;
    function next() {
        if (scripts.length === 0) {
            callback && callback();
            document.title = title;
            return;
        }
        require([scripts.shift()], function () {
            document.title = (total - scripts.length) + '/' + total;
            next();
        });
    }

    next();
};
requireScript(['lib/dat.gui', 'lib/easeljs-0.5.0.min', 'lib/preloadjs-0.2.0.min', 'lib/tweenjs-0.3.0.min'], function(){
    require(['domready'],function(domReady){
        domReady(function(){
            require(['demo-easel']);
        });
    });
});