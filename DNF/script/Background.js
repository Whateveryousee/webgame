(function () {
    //背景类
    var Background = window.Background = function () {
        //自己的背景
        this.imageA = game.R.grassA;
        this.imageB = game.R.grassB;
        this.imageC = game.R.grassC;
        this.imageD = game.R.grassD;
        /* this.x = 0;
        //速度
        this.speed = 1; */
    }
    //更新
    Background.prototype.update = function () {
        /* this.x -= this.speed; */
    }
    //渲染
    Background.prototype.render = function () {
        game.ctx.drawImage(this.imageA, 0, game.canvas.height - 203);
        game.ctx.drawImage(this.imageB, 224, game.canvas.height - 233);
        game.ctx.drawImage(this.imageC, 672, game.canvas.height - 233);
        game.ctx.drawImage(this.imageD, 448, game.canvas.height - 235);
        game.ctx.drawImage(this.imageA, 896, game.canvas.height - 203);
    }

})()