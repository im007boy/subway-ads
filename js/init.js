/**
 * Date: 13-1-16
 * Desc:
 */

require.config({
    urlArgs: "v=" +  1,
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
requireScript(['lib/dat.gui', 'lib/easeljs-0.5.0.min'], function(){
    require(['domready', 'lib/preloadjs-0.2.0.min', 'lib/tweenjs-0.3.0.min'],function(domReady){
        domReady(function(){
            require(['demo-easel']);
        });
    });
});