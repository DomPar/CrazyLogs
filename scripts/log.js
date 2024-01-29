function Log(x, y, parent, logs, player){
    var self = this
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 50;
    this.sprite = document.createElement('div')


    this.insertLog = function() {
        this.sprite.setAttribute('class', 'log');
        this.sprite.style.top = this.y + 'px'
        parent.appendChild(this.sprite)
    }

    this.moveLog = function() {
        self.checkCollision()
        var newX = self.x + 50
        if (newX >= 0 && newX <= 450) {
            self.x = newX
            self.sprite.style.left = self.x + 'px'
        } else {
            self.removeLog()
        }
    }

    this.checkCollision = function() {
        if (
            this.x < player.x + player.width &&
            this.y < player.y + player.height &&
            this.x + this.width > player.x && 
            this.y + this.height > player.y
        ) {
            player.isDead = true;
            console.log("La cagaste");
        }
    }

    this.removeLog = function() {
        logs.shift();
        parent.removeChild(this.sprite)
        clearInterval(timerId)
    }

    var timerId = setInterval(this.moveLog, 500)
}


export {Log}