(function () {
    var Game = window.Game = function (params) {

        //得到画布
        this.canvas = document.querySelector(params.canvasid);
        //上下文
        this.ctx = this.canvas.getContext("2d");
        //资源文件地址
        this.Rjsonurl = params.Rjsonurl;
        //帧编号
        this.fno = 0;
        //设置画布的宽度和高度
        this.init();

        //读取资源
        var self = this;
        //读取资源是一个异步函数，所以我们不知道什么时候执行完毕，但是其他的事情必须等到他完毕之后再执行。必须用回调函数
        this.loadAllResource(function () {
            //我们封装的回调函数，这里表示全部资源读取完毕
            self.start();

            //绑定监听
            self.bindEvent();
        });
    }
    Game.prototype.init = function () {
        this.canvas.width = 800;
        this.canvas.height = 600;
    }

    //读取资源
    Game.prototype.loadAllResource = function (callback) {
        //准备一个R对象
        this.R = {};
        this.Audio = {};
        var self = this; //备份
        //计数器
        var alreadyDoneNumber = 0;
        //发出请求，请求json文件
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                var Robj = JSON.parse(xhr.responseText);
                //遍历数组
                for (var i = 0; i < Robj.images.length; i++) {
                    //创建一共同名的key
                    self.R[Robj.images[i].name] = new Image();
                    //请求
                    self.R[Robj.images[i].name].src = Robj.images[i].url;
                    //监听
                    self.R[Robj.images[i].name].onload = function () {
                        alreadyDoneNumber++;
                        //清屏
                        self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
                        //提示文字
                        var txt = "正在加载资源" + alreadyDoneNumber + "/" + Robj.images.length + "Loading...如果长时间未加载请刷新";
                        //放置居中的位置，画布的黄金分割点
                        self.ctx.textAlign = "center";
                        self.ctx.font = "20px 微软雅黑";
                        self.ctx.fillStyle = "#000";
                        self.ctx.fillText(txt, self.canvas.width / 2, self.canvas.height * 0.618);
                        //判断是否全部加载完毕
                        if (alreadyDoneNumber == Robj.images.length) {
                            callback.call(self);
                        }
                    }
                }
                // 加载开始界面背景音乐
                for (var i = 0; i < Robj.audios.length; i++) {
                    //创建一共同名的key
                    self.Audio[Robj.audios[i].name] = document.createElement("audio");
                    //请求
                    self.Audio[Robj.audios[i].name].src = Robj.audios[i].url;
                }
            }
        }
        xhr.open("get", this.Rjsonurl, true);
        xhr.send(null);
    }

    //开始游戏
    Game.prototype.start = function () {
        /* 实例化自己的场景管理器即可
        此时game不需要负责渲染背景、主角地面、NPC等。仅需负责渲染、更新场景管理器即可 */
        this.sm = new SceneManager();
        var self = this;
        //设置定时器
        this.timer = setInterval(function () {
            //清屏
            self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
            //帧编号
            self.fno++;

            // 更新场景管理器
            self.sm.update();
            // 渲染场景管理器
            self.sm.render();

            //打印帧编号
            self.ctx.font = "16px consolas";
            self.ctx.textAlign = "left";
            self.ctx.fillStyle = "#ff0";
            self.ctx.fillText("FNO:" + self.fno, 10, 20);
            //打印场景号
            self.ctx.fillText("场景号:" + self.sm.sceneNumber, 10, 40);
        }, 20);
    }


    //绑定监听
    Game.prototype.bindEvent = function () {
        var self = this;
        document.onkeydown = function (event) {
            var event = window.e || event;
            if (event.keyCode == 37) {
                self.player1.changeDirection("L");
                self.player1.isMoving = true;
            } else if (event.keyCode == 38) {
                self.player1.changeDirection("U");
                self.player1.isMoving = true;
            } else if (event.keyCode == 39) {
                self.player1.changeDirection("R");
                self.player1.isMoving = true;
            } else if (event.keyCode == 40) {
                self.player1.changeDirection("D");
                self.player1.isMoving = true;
            }


        }
        document.onkeyup = function () {
            self.player1.isMoving = false;
        }
    }

})();