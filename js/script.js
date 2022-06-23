var playerMove;
playerMove = 'kamień';
printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
playerMove = (typeof playerMove == 'number' ? playerMove : 0) + 1;
playerMove = 'papier';
