(function () {
    //地面类 
    var Land = window.Land = function () {
        //自己的背景
        //树
        this.treeA = game.R.treeA;
        this.treeB = game.R.treeB;
        this.treeC = game.R.treeC;
        this.treeD = game.R.treeD;
        this.treeE = game.R.treeE;

        //草地
        this.grassA = game.R.grassA;
        this.grassB = game.R.grassB;
        this.grassC = game.R.grassC;
        this.grassD = game.R.grassD;

        this.grassA.w = 224;
        this.grassA.h = 203;
        this.x = 0;
        this.y = game.canvas.height - this.grassA.h * 2;

        //石头
        this.stoneA = game.R.stoneA;

        this.stoneA.w = 141;
        this.stoneA.h = 89;

    }
    //更新
    Land.prototype.update = function () {

    }
    //渲染草地与其他杂项，（石头，花丛，树根...)
    Land.prototype.render = function () {
        //草地
        game.ctx.drawImage(this.grassA, this.grassA.w * 0, game.canvas.height - this.grassA.h);
        game.ctx.drawImage(this.grassA, this.grassA.w * 1, game.canvas.height - this.grassA.h);
        game.ctx.drawImage(this.grassA, this.grassA.w * 2, game.canvas.height - this.grassA.h);
        game.ctx.drawImage(this.grassA, this.grassA.w * 3, game.canvas.height - this.grassA.h);

        game.ctx.drawImage(this.grassA, this.grassA.w * 0, this.y+60);
        game.ctx.drawImage(this.grassA, this.grassA.w * 1, this.y+60);
        game.ctx.drawImage(this.grassA, this.grassA.w * 2, this.y+60);
        game.ctx.drawImage(this.grassA, this.grassA.w * 3, this.y+60);

        //树
        game.ctx.drawImage(this.treeB, -40, 0);
        game.ctx.drawImage(this.treeD, 380, 100);
        game.ctx.drawImage(this.treeA, 150, -50);
        game.ctx.drawImage(this.treeB, 250, -20);
        game.ctx.drawImage(this.treeE, -10, 210);
        game.ctx.drawImage(this.treeE, -60, 300);
        game.ctx.drawImage(this.treeB, 660, -50);
        game.ctx.drawImage(this.treeB, 540, -30);
        
        game.ctx.drawImage(this.treeE, 300, 510);
        game.ctx.drawImage(this.treeE, 200, 530);

        game.ctx.drawImage(this.treeD, -50, 530);
        game.ctx.drawImage(this.treeD, 50, 550);

        //石头
        game.ctx.drawImage(this.stoneA, 500, 330);
        game.ctx.drawImage(this.stoneA, 580,370);
        game.ctx.drawImage(this.stoneA, 520, 440);
        game.ctx.drawImage(this.stoneA, 570,490);
    }

})()