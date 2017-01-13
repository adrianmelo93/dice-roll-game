var $dieAndNum = $('#die, #roll');
var $die = $('#die')
var $roll = $('#roll');
var $hillary = $('#player1');
var $trump = $('#player2');
var hillaryPos = 0;
var trumpPos = 0;
var tiles = {};
var $winnerCircle = $('#winner-circle');

for (var i = 1; i <= 10; i++) {
    tiles[i] = $('#tile' + i);
}
var turn;
if (Math.random() > 0.5) {
    turn = 'player1';
} else {
    turn = 'player2';
}

$dieAndNum.click(function() {

    //change the die image source to the gif
    $die.attr('src', './img/Dodecahedron3.gif');
    $roll.html('?');

    //roll the die
    var num = Math.floor(Math.random() * 10 + 1)


    setTimeout(function() {
        $roll.html(num);
        movePlayer(num);
    }, 1800);


});


function movePlayer(num) {
    //move player
    var $playerToMove;
    var playerTile;
    if (turn === 'player1') {
        $playerToMove = $hillary;
        turn = 'player2';
        hillaryPos += num;
        playerTile = hillaryPos;
    } else {
        $playerToMove = $trump;
        turn = 'player1';
        trumpPos += num;
        playerTile = trumpPos;
    }

    if (trumpPos > 10 || hillaryPos > 10) {
        onGameOver($playerToMove);
        return false;
    }

    //get tile position
    var tilePos = tiles[playerTile][0].getBoundingClientRect();

    $playerToMove.css({
        'top': tilePos.top,
        'left': tilePos.left

    });
}

function onGameOver($winer) {
    var tilePos = $winnerCircle[0].getBoundingClientRect();
    $winer.css({
        'top': tilePos.top,
        'left': tilePos.left
    }).addClass('winner-style');
    setTimeout(function() {
        alert('Winner!');
        reset();
    }, 400);
    console.log($winer);
}

function reset() {
    hillaryPos = 0;
    trumpPos = 0;

    $hillary.css({
        top: '160px',
        left: '10px'
    }).removeClass('winner-style');

    $trump.css({
        top: '250px',
        left: '10px'
    }).removeClass('winner-style');
}
