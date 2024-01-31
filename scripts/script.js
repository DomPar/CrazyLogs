import {Player} from './player.js'
import {Car} from './car.js'
import {Log} from './log.js'

var board = document.getElementById("board")
var boton = document.getElementById("start")
var sound = new Audio("../sounds/audio.ogg")
sound.volume = 0.1
var overScreen = document.getElementById("gameover")
var playerId = null;
var carId = null;
var cars = []
var logId = null;
var logs = []
var logLeftId = null;
var carLeftId = null;
var player = new Player(250, 500, board, logs)
var estadoToggle = true;

function gameStart() {
    player.insertPlayer()
    /* playerId = setInterval(movement, 200) */
    setTimeout(startMovement, 3000)
    carId = setInterval(createCar, 2000)
    carLeftId = setInterval(createCarLeft, 2000)
    logId = setInterval(createLog, 5000)
    logLeftId = setInterval(createLogLeft, 10000)
    boton.innerText = "Reset";
}

function startMovement() {
    playerId = setInterval(movement, 200)
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
        sound.pause();
        sound.currentTime = 0;
        overScreen.style.visibility = "visible";
        boton.style.visibility = "visible";
    }
    if (player.won === true) {
        clearInterval(playerId)
        clearInterval(carId)
        clearInterval(carLeftId)
        clearInterval(logId)
        clearInterval(logLeftId)
        cars.forEach(function(car){clearInterval(car.timerId)})
        logs.forEach(function(log){clearInterval(log.timerId)})
        sound.pause();
        sound.currentTime = 0;
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

start.addEventListener("click",function() {
    if (estadoToggle) {
        gameStart()
        sound.play();
        boton.style.visibility = "hidden";
        boton.style.top = 450 + "px";
    } else {
        location.reload();
        sound.pause();
        sound.currentTime = 0;
    }
    estadoToggle = !estadoToggle
});