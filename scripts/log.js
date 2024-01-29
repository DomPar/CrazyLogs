function Log(x, y, parent, logs, player, direction){
    var self = this
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 50;
    this.sprite = document.createElement('div');
    this.direction = direction;


    this.insertLog = function() {
        this.sprite.setAttribute('class', 'log');
        this.sprite.style.top = this.y + 'px'
        this.sprite.style.left = this.x + 'px'
        parent.appendChild(this.sprite)
    }

    this.moveLog = function() {
        self.checkCollision()
        if(self.direction === 1){
            var newX = self.x + 50
            if (newX <= 400) {
                self.x = newX
                self.sprite.style.left = self.x + 'px'
            } else {
                self.removeLog()
            }
        } else {
            var newX = self.x - 50
            if (newX >= 0) {
                self.x = newX
                self.sprite.style.left = self.x + 'px'
            } else {
                self.removeLog()
            }
        }
    }

    this.checkCollision = function() {
        var overlap = (
            this.x < player.x + player.width &&
            this.y < player.y + player.height &&
            this.x + this.width > player.x && 
            this.y + this.height > player.y
            )
        if (overlap && player.y <= 200 && player.y >= 100){
            player.isDead = false;
            console.log("A salvo");
        } else if (!overlap && player.y <= 200 && player.y >= 100) {
            player.isDead = true;
            console.log("Muerta");
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