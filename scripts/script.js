var board = document.getElementById("board")
var player = document.getElementById("player")

var playerX = 250
var playerY = 500
var directionX = 0
var directionY = 0

function movePlayerX(directionX){
    playerX += 3 * directionX
    player.style.left = (playerX) + 'px'
}

function movePlayerY(directionY){
    playerY += 3 * directionY
    player.style.top = (playerY) + 'px'
}

window.addEventListener('keydown', function(e){
    switch (e.key) {
        case 'w':
            movePlayerY('-1')
            break;

        case 'a':
            movePlayerX('-1')
            break;
        
        case 's':
            movePlayerY('1')
            break;

        case 'd':
            movePlayerX('1')
            break;

        default:
            break;
    }
})

window.addEventListener('keyup', function()
{
    directionX = 0
    directionY = 0
})