/**
 * Date: 13-1-16
 * Desc:
 */

require.config({
    urlArgs: "",
    baseUrl: 'js/'
});

requireScript = function (scripts, callback) {
    function next() {
        if (scripts.length === 0) {
            callback && callback();
            return;
        }
        require([scripts.shift()], function () {
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