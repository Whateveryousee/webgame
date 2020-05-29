(function () {
    //主角类
    var LeadActor = window.LeadActor = function () {
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


        //待机状态
        this.stay = 0;

        //战斗状态
        this.fight = 0;

        //行走状态
        this.walk = 0;

        //奔跑状态
        this.run = 0;

        //跳跃状态
        this.jump = 0;

        //主角的初始位置（这个位置是真实的物理位置）
        //主角的宽度为64，32是半个图片宽
        this.x = game.canvas.width * (1 - 0.618) - 32;
        this.y = 400;
        //主角自己的帧，用于玩家各种操作算法
        this.fno = 0;
        //是否拥有能量
        this.hasEnergy = false;
    };
    //更新
    LeadActor.prototype.update = function () {
        game.fno % 20 == 0 && this.jump++;
        if (this.jump > this.jumpArr.length - 1) {
            this.jump = 0;
        }

        //按下c键即可跳跃 keycode码是67


        if (!this.hasEnergy) {
            this.y += this.fno * 0.12;
        } else {
            //有能量
            this.y -= (20 - this.fno) * 0.68;
            //落地以后才可以释放第二次跳跃，目前角色没有二段跳
            if (this.fno > 20) {
                this.hasEnergy = false;
                this.fno = 0;
            }
        }

        this.d += 0.05;
        this.fno++;
    }
    //渲染
    LeadActor.prototype.render = function () {
        game.ctx.save();
        game.ctx.drawImage(this.fightArr[this.fight], this.x, this.y);

    }
    LeadActor.prototype.high_jump = function () {
        this.hasEnergy = true;
        game.ctx.drawImage(this.jumpArr[this.jump], this.x, this.y);
        console.log(this.jumpArr[this.jump]);
        this.fno = 0;
    }
})();