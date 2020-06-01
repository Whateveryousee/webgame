(function () {
    //游戏开始场景
    var StartBg = window.StartBg = function () {
        //游戏开始场景装载
        this.startBg = game.R.startBg;
        this.gear = game.R.gear;
        //主题文字
        this.mainText = game.R.mainText;
        //小标题文字
        this.activeText = game.R.activeText;
        //开始button
        this.startGameBtn = game.R.startGameBtn;


        this.mainTextY = -500;
        this.activeTextY = 500;
    }
    StartBg.prototype.update = function () {
        this.mainTextY += 5;
        this.activeTextY -= 6;
        if (this.mainTextY >= -60) {
            this.mainTextY = -60;
        };
        if (this.activeTextY < -60) {
            this.activeTextY = -60;
        };

        
    }
    StartBg.prototype.render = function () {
        game.ctx.drawImage(this.startBg, 0, 0, 640, 522, -80, -60, 960, 783);

        //齿轮
        game.ctx.drawImage(this.gear, 0, 0, 366, 366, 217, 117, 366, 366);

        game.ctx.drawImage(this.mainText, 0, 0, 640, 522, -80, this.mainTextY, 960, 783);
        game.ctx.drawImage(this.activeText, 0, 0, 640, 522, -80, this.activeTextY, 960, 783);

        game.ctx.drawImage(this.startGameBtn, 0, 0, 128, 26, 340, 350, 128, 26);

    }
})();