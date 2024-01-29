function Player(x, y, parent){
    var self = this
    this.x = x;
    this.y = y;
    this.directionX = 0;
    this.directionY = 0;
    this.width = 50;
    this.height = 50;
    this.sprite = document.createElement('div')


    this.insertPlayer = function() {
        this.sprite.setAttribute('id', 'player');
        parent.appendChild(this.sprite)
        this.sprite.style.left = this.x + 'px'
        this.sprite.style.top = this.y + 'px'
    }

    this.movePlayerX = function() {
        var newX = self.x + 25 * self.directionX
        if (newX >= 0 && newX <= 500) {
            self.x = newX
            self.sprite.style.left = self.x + 'px'
        }
    }

    this.movePlayerY = function() {
        var newY = self.y + 25 * self.directionY
        if (newY >= 0 && newY <= 500) {
            self.y = newY
            self.sprite.style.top = self.y + 'px'
        }
    }
}

export {Player}