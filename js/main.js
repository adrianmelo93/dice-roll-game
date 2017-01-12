var $dieAndNum = $('#die, #roll');
var $die = $('#die')
var $roll = $('#roll');
var $hillary = $('#player1');
var $trump = $('#player2');
var hillaryPos = 0;
var trumpPos = 0;
var tiles = {};
var $winnerCircle = $('#winner-circle');
var gameOver = false;

for(var i = 1; i <= 10; i++) {
    tiles[i] = $('#tile' + i);
}
var turn;
if(Math.random() > 0.5) {
    turn = 'player1';
}
else {
    turn = 'player2';
}

$dieAndNum.click(function () {
if(gameOver ===true) return false;

     //change the die image source to the gif
     $die.attr('src', './img/Dodecahedron3.gif');

     //roll the die
var num = Math.floor(Math.random() * 10 + 1)
$roll.html(num);


    //move player
    var $playerToMove;
    var playerTile;
    if(turn === 'player1') {
        $playerToMove = $hillary;
        turn = 'player2';
        hillaryPos += num;
        playerTile = hillaryPos;
    }
    else {
        $playerToMove = $trump;
        turn = 'player1';
        trumpPos += num;
        playerTile = trumpPos;
    }

    if(trumpPos > 10 || hillaryPos > 10) {
        onGameOver($playerToMove);
        return false;
    }

    //get tile position
    var tilePos = tiles[playerTile][0].getBoundingClientRect();

    $playerToMove.css({
        'top': tilePos.top,
        'left': tilePos.left

    });
});

function onGameOver($winer){
    gameOver = true;
    var tilePos = $winnerCircle[0].getBoundingClientRect();
$winer.css({
    'top': tilePos.top,
    'left': tilePos.left
}).addClass('winner-style');
setTimeout(function() {
    alert('Winner!')
}, 400);
    console.log($winer);
}
