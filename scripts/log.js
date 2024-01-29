function Car(x, y, parent, cars, player){
    var self = this
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.sprite = document.createElement('div')


    this.insertCar = function() {
        this.sprite.setAttribute('class', 'car');
        this.sprite.style.top = this.y + 'px'
        parent.appendChild(this.sprite)
    }

    this.moveCar = function() {
        self.checkCollision()
        var newX = self.x + 50
        if (newX >= 0 && newX <= 500) {
            self.x = newX
            self.sprite.style.left = self.x + 'px'
        } else {
            self.removeCar()
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

    this.removeCar = function() {
        cars.shift();
        parent.removeChild(this.sprite)
        clearInterval(timerId)
    }

    var timerId = setInterval(this.moveCar, 500)
}


export {Car}