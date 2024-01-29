import {Player} from './player.js'

var board = document.getElementById("board")
var player = new Player(250, 500, board)
var playerId = null;

function gameStart() {
    player.insertPlayer()
    playerId = setInterval(movement, 100)
}

function movement() {
    player.movePlayerX();
    player.movePlayerY();
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