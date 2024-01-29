function Car(x, y, parent, cars, player, direction){
    var self = this
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.sprite = document.createElement('div')
    this.direction = direction


    this.insertCar = function() {
        this.sprite.setAttribute('class', 'car');
        this.sprite.style.left = this.x + 'px'
        this.sprite.style.top = this.y + 'px'
        parent.appendChild(this.sprite)
    }

    this.moveCar = function() {
        if (self.direction === 1) {
            self.x += 10
            self.sprite.style.left = self.x + 'px'
            if (self.x >= 500) {
                self.removeCar()
            }
        } else {
            self.x -= 10
            self.sprite.style.left = self.x + 'px'
            if (self.x <= 0) {
                self.removeCar()
            }
        }     
        self.checkCollision()
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

    this.removeCar = function() {
        cars.shift();
        parent.removeChild(this.sprite)
        clearInterval(this.timerId)
    }

    this.timerId = setInterval(this.moveCar, 50)
}


export {Car}