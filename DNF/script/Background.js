(function () {
    //背景类 仅为游戏内容背景
    var Background = window.Background = function () {
        //远景 远景可以保持不动
        this.bg_far_0 = game.R.bg_far_0;
        
        
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

        game.ctx.drawImage(this.bg_far_0, 0, 0);
        game.ctx.drawImage(this.bg_far_0, 640,0);

        game.ctx.drawImage(this.bg_mid, 0, 0, 640, 300,0,0,640,300);
        game.ctx.drawImage(this.bg_mid, 0, 0, 640, 300,640,0,640,300);
    }

})()