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
        this.sprite.style.left = this.x + 'px'
        this.sprite.style.top = this.y + 'px'
        parent.appendChild(this.sprite)
    }

    this.moveLog = function() {
/*         self.isInLog() */
        if(self.direction === 1){
            self.x += 1
            self.sprite.style.left = self.x + 'px'
            if (self.x >= 450) {
                self.removeLog()
            }
        } else {
            self.x -= 1
            self.sprite.style.left = self.x + 'px'
            if (self.x <= 0) {
                self.removeLog()
            }
        }
/*         self.checkCollision() */
    }
    this.isInLog = function() {
        if (self.y === player.y && self.x <= player.x && self.x + self.width >= player.x + player.width) {
            return true;
        } else {
            return false;
        } 
        

        return true
    }

/*     this.dead = function() {
        if ((player.y <= 200 && player.y >= 100) && self.isInLog()) {
            player.isDead = false;
        } else if (player.y <= 200 && player.y >= 100) {
            player.isDead = true;
        }
    }
 */
    this.checkCollision = function() {
        var overlap = (
            this.x < player.x + player.width &&
            this.y < player.y + player.height &&
            this.x + this.width > player.x && 
            this.y + this.height > player.y
            )
            console.log(this.x < player.x + player.width)
            console.log(this.y < player.y + player.height);
            console.log(this.x + this.width > player.x);
            console.log(this.y + this.height > player.y)

        if (overlap && player.y <= 200 && player.y >= 100){
            player.isDead = false;
            console.log("A salvo");
        } else if (!overlap && player.y <= 200 && player.y >= 100) {
/*             player.isDead = true; */
            console.log("Muerta");
        }
    }

    this.removeLog = function() {
        logs.shift();
        parent.removeChild(this.sprite)
        clearInterval(this.timerId)
    }

    this.timerId = setInterval(this.moveLog, 50)
}


export {Log}