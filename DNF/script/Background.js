(function () {
    //背景类 仅为游戏内容背景
    var Background = window.Background = function () {
        
        //中景
        this.bg_mid = game.R.bg_mid_woods;
        this.imageB = game.R.grassB;
        this.imageC = game.R.grassC;
        this.imageD = game.R.grassD;

    }
    //更新
    Background.prototype.update = function () {

    }
    //渲染
    Background.prototype.render = function () {

        game.ctx.drawImage(this.bg_mid, 0, 0, 640, 300,0,0,640,300);
        game.ctx.drawImage(this.bg_mid, 0, 0, 640, 300,640,0,640,300);
        /* game.ctx.drawImage(this.imageC, 672, game.canvas.height - 233);
        game.ctx.drawImage(this.imageD, 448, game.canvas.height - 235);
        game.ctx.drawImage(this.imageA, 896, game.canvas.height - 203); */
    }

})()