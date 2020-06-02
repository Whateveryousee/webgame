(function () {
    //主角类
    var Player = window.Player = function () {
        //主角暂时设为男剑士,先放一位男枪手为以后做测试

        //待机的姿态
        this.stayArr = [
            game.R["swordsman_b_stay1"],
            game.R["swordsman_b_stay2"],
            game.R["swordsman_b_stay3"]
        ]

        //战斗姿态
        this.fightArr = [
            game.R["swordsman_b_fight"]
        ]

        //行走的姿态
        this.walkArr = [
            game.R["swordsman_b_walk1"],
            game.R["swordsman_b_walk2"],
            game.R["swordsman_b_walk3"],
            game.R["swordsman_b_walk4"],
            game.R["swordsman_b_walk5"],
            game.R["swordsman_b_walk6"],
            game.R["swordsman_b_walk7"],
            game.R["swordsman_b_walk8"]
        ]
        //奔跑的姿态
        this.runArr = [
            game.R["swordsman_b_fight"],
            game.R["swordsman_b_run2"],
            game.R["swordsman_b_run3"],
            game.R["swordsman_b_run4"],
            game.R["swordsman_b_run5"],
            game.R["swordsman_b_run6"],
            game.R["swordsman_b_run7"],
            game.R["swordsman_b_run8"]
        ]
        //跳跃的姿态
        this.jumpArr = [
            game.R["swordsman_b_jump1"],
            game.R["swordsman_b_jump2"],
            game.R["swordsman_b_jump3"],
            game.R["swordsman_b_jump4"],
            game.R["swordsman_b_jump5"],
            game.R["swordsman_b_jump6"],
            game.R["swordsman_b_jump7"],
            game.R["swordsman_b_jump8"]
        ];

        //是否在移动
        this.isMoving = false;

        //方向 L左37 R右39 U上38 D下40
        this.direction = "L";

        //速度
        this.speed = 0.618;
        //自己的状态 做出任何操作就等于离开了待机状态
        this.state = 0;

        //主角的初始位置（这个位置是真实的物理位置）
        //主角的原图质量为46 121
        this.x = 800 * (1 - 0.618);
        this.y = 600 * 0.618;
        //主角自己的帧，用于玩家各种操作算法
        // this.fno = 0;
    };
    //更新玩家
    Player.prototype.update = function () {
        if (this.isMoving) {
            switch (this.direction) {
                case "L":
                    this.x -= this.speed * 4;
                    break;
                case "R":
                    this.x += this.speed * 4;
                    break;
                case "U":
                    this.y -= this.speed * 2.5;
                    break;
                case "D":
                    this.y += this.speed * 2.5;
                    break;
            }
        }
    };
    //渲染玩家
    Player.prototype.render = function () {
        //给玩家角色加上一个阴影，shadowBlur属性设置或返回阴影的模糊级数
        game.ctx.save();
        game.ctx.shadowBlur = 60;
        game.ctx.shadowOffsetX = -10;
        game.ctx.shadowOffsetY = 0;
        game.ctx.shadowColor = "black";
        game.ctx.drawImage(this.stayArr[0], this.x, this.y);
        game.ctx.restore();
    };
    //更改方向
    Player.prototype.changeDirection = function (directionLetter) { //directionLetter是方向字母的意思
        this.direction = directionLetter;
        if (directionLetter == "L") {
            console.log("success");
        } else if (directionLetter == "R") {

        } 
    }
    //
    Player.prototype.move = function () {
        this.isMoving = true;
    }
})();