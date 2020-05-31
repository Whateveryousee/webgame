(function () {
    var SceneManager = window.SceneManager = function () {
        // 1表示开始界面，2表示游戏内容，3表示GameOver
        this.sceneNumber = 1;
        //场景管理器负责实例化东西
        this.background = new Background();
        this.land = new Land();

        //var 
    }
    SceneManager.prototype.update = function () { 

    }
    SceneManager.prototype.render = function () { 
        // 根据当前是第几个场景，来决定做什么
        switch(this.sceneNumber){
            case 1: 
                this.background.render();
                this.land.render();
            break;
        }
    }

    //进入某个场景
    SceneManager.prototype.enter = function (number) {
        this.sceneManager = number;
        switch(this.sceneManager){
            case 1:
                //进入1号场景这一瞬间要做的事情
                break;
        }
    }
})()