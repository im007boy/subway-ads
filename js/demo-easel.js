/**
 * Date: 13-1-26
 * Desc:
 */

var preload = new createjs.PreloadJS();
function startDemo(layer){

    var bg = new createjs.Shape();
    bg.graphics.clear().beginFill(createjs.Graphics.getRGB(0, 0, 0, 1))
        .drawRoundRect(0, 0, layer.width, layer.height, 0).endFill();
    //bg.cache(0, 0, stage.width, stage.height);
    layer.addChild(bg);

    var wall = new createjs.Container();
    wall.y = 100;
    layer.addChild(wall);
    var ad;
    var adConfig = {
        width: 400,
        height: 200,
        marginRight: 1000
    };
    for (var i = 0;i < 2;i ++){
        ad = new createjs.Bitmap( preload.getResult('ad2').result );
        wall.addChild( ad );
        ad.x = i * (adConfig.marginRight + adConfig.width);
        ad.y = 0;
        ad.scaleX = (adConfig.width/ad.image.width);
        ad.scaleY = (adConfig.height/ad.image.height);
    }

    var trainConfig = {
        speed: 900
    };
    createjs.Ticker.addListener(function(){
        wall.x -= trainConfig.speed;
        wall.x = -(-wall.x)%(adConfig.width + adConfig.marginRight)
    });
    var gui = new dat.GUI();
    gui.add(trainConfig, 'speed', 0, 800);
    gui.add(adConfig, 'marginRight', 10, 1000).onChange(function(val){
        wall.children.forEach(function(ad, i){
            ad.x =  (adConfig.width + adConfig.marginRight) * i;
        })
    });

}
function proxy(fn, scope){
    return function(){
        fn.apply(scope, arguments);
    }
}
function init() {
    var canvas = document.createElement('canvas');
    canvas.setAttribute('width','800');
    canvas.setAttribute('height','600');
    var stage = new createjs.Stage(canvas);
    stage.width = canvas.width;
    stage.height = canvas.height;
    document.getElementById('cr-stage').appendChild(stage.canvas);

    createjs.Ticker.init();
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addListener(stage, true);

    var demoLayer = new createjs.Container();
    demoLayer.width = stage.width;
    demoLayer.height = stage.height;
    demoLayer.visible = false;
    stage.addChild( demoLayer );

    var loadingLayer = new createjs.Container();
    loadingText = new createjs.Text('...');
    loadingLayer.addChild(loadingText);
    stage.addChild(loadingLayer);

    preload.onProgress = proxy(function(e){
        loadingText.text = e.loaded + '/' + e.total;
    }, this);
    preload.onComplete = proxy(function(){
        loadingLayer.visible = false;
        demoLayer.visible = true;
        startDemo(demoLayer);
    }, this);
    preload.loadManifest([{
        id: 'ad2', src: 'image/ad2.png'
    }]);


}
init();