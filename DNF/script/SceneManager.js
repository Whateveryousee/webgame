(function () {
    var SceneManager = window.SceneManager = function () {
        // 1表示开始界面，2表示教程，3表示游戏内容，4表示GameOver
        this.sceneNumber = 2;
        //场景管理器负责实例化东西

        // 实例化开始游戏场景
        game.startBg = new StartBg();

        //考虑加入淡入淡出特效

        //游戏内容场景
        game.background = new Background();
        game.land = new Land();

        this.mainTextY = -500;
        this.activeTextY = 500;

        //实例化玩家角色
        game.player1 = new Player();

        //添加监听
        this.bindEvent();
    }
    SceneManager.prototype.update = function () {

        switch (this.sceneNumber) {
            case 1:
                this.mainTextY += 5;
                this.activeTextY -= 6;
                if (this.mainTextY >= -60) {
                    this.mainTextY = -60;
                };
                if (this.activeTextY < -60) {
                    this.activeTextY = -60;
                };
                break;
            case 2:
                game.background.update();
                game.land.update();
                break;

        }
    }
    SceneManager.prototype.render = function () {
        // 根据当前是第几个场景，来决定做什么
        switch (this.sceneNumber) {
            case 1:
                // game.startBg.render();
                game.ctx.drawImage(game.R["startBg"], 0, 0, 640, 522, -80, -60, 960, 783);

                //齿轮
                game.ctx.drawImage(game.R["gear"], 0, 0, 366, 366, 217, 117, 366, 366);

                game.ctx.drawImage(game.R["mainText"], 0, 0, 640, 522, -80, this.mainTextY, 960, 783);
                game.ctx.drawImage(game.R["activeText"], 0, 0, 640, 522, -80, this.activeTextY, 960, 783);
                game.ctx.drawImage(game.R["startGameBtn"], game.canvas.width / 2 - 64, 350);

                //播放初始音乐
                // game.Audio["StartBGM"].play();
                break;
            case 2:
                game.background.render();
                game.land.render();

                game.player1.update();
                game.player1.render();

                //播放音乐
                // game.Audio["Forest01Old"].play();
                break;
        }
    }

    //进入某个场景
    SceneManager.prototype.enter = function (number) {
        this.sceneNumber = number;
        switch (this.sceneNumber) {
            case 1:
                //进入1号场景这一瞬间要做的事情
                //this.
                break;
            case 2:
                //进入2号场景这一瞬间要做的事情
                //关闭其他场景的bgm以及音效
                game.Audio["StartBGM"].pause();
                break;
        }
    }

    //添加监听
    SceneManager.prototype.bindEvent = function () {
        var self = this;
        game.canvas.onclick = function (event) {
            var event = event || window.event;
            var mousex = event.clientX - game.canvas.offsetLeft;
            var mousey = event.clientY - game.canvas.offsetTop;
            //点击的时候判断当前是第几个场景
            switch (self.sceneNumber) {
                case 1:
                    //进入1号场景这一瞬间要做的事情
                    if (mousex > game.canvas.width / 2 - 64 && mousey > 350 && mousex < game.canvas.width / 2 + 64 && mousey < 350 + 26) {
                        //说明用户点击开始按钮了
                        self.enter(2);
                    }
                    break;
                case 2:
                    console.log("场景2");
                    break;
            }
        }
    }
})()