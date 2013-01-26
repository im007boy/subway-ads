define('components/ad', function(){
    Crafty.c('Ad', {
        _enterFrame: function() {
            if (!this.active) {
                return;
            }

        },
        init: function() {
            createSprites();
            this.requires('SpriteAnimation, ball, Collision, Edges');
        },
        ball: function(active) {
        }
    });
});
