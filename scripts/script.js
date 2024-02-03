import {Player} from './player.js'
import {Car} from './car.js'
import {Log} from './log.js'

var board = document.getElementById("board")
var boton = document.getElementById("start")
var sound = new Audio("./sounds/audio.ogg")
sound.volume = 0.1
var deadSound = new Audio("./sounds/death.mp3")
var winSound = new Audio("./sounds/victory.wav")
var overScreen = document.getElementById("gameover")
var winScreen = document.getElementById("win")
var playerId = null;
var carId = null;
var cars = []
var logId = null;
var logs = []
var logLeftId = null;
var carLeftId = null;
var player = new Player(250, 500, board, logs)
var estadoToggle = true;
var gameStarted = false;
var deadId = null;

function gameStart() {
    player.insertPlayer()
    setTimeout(startGame, 3000)
    playerId = setInterval(update, 200)
    carId = setInterval(createCar, 500)
    carLeftId = setInterval(createCarLeft, 750)
    logId = setInterval(createLog, 5000)
    logLeftId = setInterval(createLogLeft, 10000)
    deadId = setInterval(player.dead, 50)
    boton.innerText = "Reset";
}

function update() {
    if (!player.isDead) {

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
        deadSound.play();
        deadSound.currentTime = 0;
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
        winScreen.style.visibility = "visible"
        boton.style.top = 450 + "px";
        boton.style.visibility = "visible";
        winSound.play()
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
    if (gameStarted) {
        switch (e.key.toLowerCase()) {
            case 'w':
            case 'arrowup':
                player.moveForward();
                break;
    
            case 'a':
            case 'arrowleft':
                player.moveLeft();
                break;
            
            case 'd':
            case 'arrowright':
                player.moveRigth();
                break;
    
            case 's':
            case 'arrowdown':
                player.moveBackward();
                break;
    
            default:
                break;
        }
    }
})

function startGame() { //Esta funcion sirve para decir que el juego ha empezado y lance el timeout que me hace esperar para moverme
    gameStarted = true;
}

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