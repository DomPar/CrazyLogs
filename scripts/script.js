import {Player} from './player.js'
import {Car} from './car.js'

var board = document.getElementById("board")
var player = new Player(250, 500, board)
var playerId = null;
var carId = null;
var cars = []

function gameStart() {
    player.insertPlayer()
    playerId = setInterval(movement, 100)
    carId = setInterval(createCar, 2000)
}

function movement() {
    if (!player.isDead) {
        player.movePlayerX();
        player.movePlayerY();
    } else {
        clearInterval(playerId)
        clearInterval(carId)
        cars.forEach(function(car){clearInterval(car.timerId)})
    }
}

function createCar() {
    var values = [300, 350, 400]
    var coordY = values[Math.floor(Math.random()*values.length)]
    var car = new Car(0, coordY, board, cars, player)
    car.insertCar();
    cars.push(car)
}

window.addEventListener('keydown', function(e){
    switch (e.key) {
        case 'w':
            player.directionY = -1
            break;

        case 'a':
            player.directionX = -1
            break;
        
        case 's':
            player.directionY = 1
            break;

        case 'd':
            player.directionX = 1
            break;

        default:
            break;
    }
})

window.addEventListener('keyup', function()
{
    player.directionX = 0
    player.directionY = 0
})

gameStart();