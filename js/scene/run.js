Crafty.scene('run', function() {


    Crafty.e('2D, DOM, Text')
		.attr({
			x: 0,
			y: Crafty.stage.elem.clientHeight / 2 + 60,
			w: Crafty.stage.elem.clientWidth,
			h: 30
		})
		.text('game over!')
		.textColor('#3366cc')


	Crafty.e('2D, DOM, Mouse, Text, Color')
		.attr({
			x: 50,
			y: 50,
			w: 50,
			h: 50
		})
        .color('#aabbcc')
        .text('click me')
		.bind('MouseDown', function(e) {
            console.log('click')
			//Crafty.scene('menu');
		});


    var bg = Crafty.e("2D, DOM, Image")
        .attr({x: 100, y: 100, w: 1024, h: 768})
        .image("image/ad1.png", "repeat")
        .css({width:30, height: 30});
});


