import {Player} from './player.js'
import {Car} from './car.js'
import {Log} from './log.js'

var board = document.getElementById("board")
var playerId = null;
var carId = null;
var cars = []
var logId = null;
var logs = []
var logLeftId = null;
var carLeftId = null;
var playerDeadId = null;
var player = new Player(255, 500, board, logs)

function gameStart() {
    player.insertPlayer()
    playerId = setInterval(movement, 200)
    playerDeadId = setInterval(player.dead, 50)
    carId = setInterval(createCar, 2000)
    carLeftId = setInterval(createCarLeft, 2000)
    logId = setInterval(createLog, 5000)
    logLeftId = setInterval(createLogLeft, 10000)

}

function movement() {
    if (!player.isDead) {
        player.movePlayerX();
        player.movePlayerY();
    } else {
        clearInterval(playerId)
        clearInterval(carId)
        clearInterval(carLeftId)
        clearInterval(logId)
        clearInterval(logLeftId)
        cars.forEach(function(car){clearInterval(car.timerId)})
        logs.forEach(function(log){clearInterval(log.timerId)})
    }
    if (player.won === true) {
        clearInterval(playerId)
        clearInterval(carId)
        clearInterval(carLeftId)
        clearInterval(logId)
        clearInterval(logLeftId)
        cars.forEach(function(car){clearInterval(car.timerId)})
        logs.forEach(function(log){clearInterval(log.timerId)})
    }
}

function createCar() {
    var values = [300, 350]
    var coordY = values[Math.floor(Math.random()*values.length)]
    var car = new Car(0, coordY, board, cars, player, 1)
    car.insertCar();
    cars.push(car)
}

function createCarLeft() {
    var values = [400, 450]
    var coordY = values[Math.floor(Math.random()*values.length)]
    var car = new Car(500, coordY, board, cars, player, -1)
    car.insertCar();
    cars.push(car)
}

function createLog() {
    var values = [100, 200]
    var coordY = values[Math.floor(Math.random()*values.length)]
    var log = new Log(0, coordY, board, logs, player, 1)
    log.insertLog();
    logs.push(log)
}

function createLogLeft() {
    var logIzq = new Log(400, 150, board, logs, player, -1)
    logIzq.insertLog();
    logs.push(logIzq)
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