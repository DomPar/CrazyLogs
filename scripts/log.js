function Log(x, y, parent, logs, player, direction){
    var self = this
    this.x = x;
    this.y = y;
    this.width = 150;
    this.height = 50;
    this.sprite = document.createElement('div');
    this.direction = direction;


    this.insertLog = function() {
        this.sprite.setAttribute('class', 'log');
        this.sprite.style.left = this.x + 'px'
        this.sprite.style.top = this.y + 'px'
        parent.appendChild(this.sprite)
    }

    this.moveLog = function() {
        if(self.direction === 1){
            self.x += 50
            self.sprite.style.left = self.x + 'px'
            if (self.isInLog()){
                player.moveRigth();
            }
            if (self.x >= 450) {
                self.removeLog()
            }
        } else {
            self.x -= 50
            self.sprite.style.left = self.x + 'px'
            if (self.isInLog()){
                player.moveLeft();
            }
            if (self.x <= 0) {
                self.removeLog()
            }
        }
    }

    this.isInLog = function() {
        if (self.y === player.y && self.x <= player.x && self.x + self.width >= player.x + player.width) {
            return true;
        } else {
            return false;
        } 
    }

    this.removeLog = function() {
        logs.shift();
        parent.removeChild(this.sprite)
        clearInterval(this.timerId)
    }

    this.timerId = setInterval(this.moveLog, 1000)
}


export {Log}