/**
 * Date: 13-1-16
 * Desc:
 */
define('demo', function(){
    Crafty.init(600, 500);
    Crafty.canvas.init();


    Crafty.scene('loading', function() {
        Crafty.load(['image/ad1.png', 'image/ad2.png'], function() {
            //installAudio();
            require(['scene/run'], function(){
                Crafty.scene('run');
            });
        });

        Crafty.background('#000');
        Crafty.e('2D, DOM, Text').attr({
            w: Crafty.stage.elem.clientWidth,
            h: 20,
            x: 0,
            y: 120
        }).text('Loading').css({
                'text-align': 'center',
                'color': '#FFF'
            });
    });


    Crafty.scene('loading');
});
