const game = new Chess();

const board = Chessboard('board', {
  draggable: true,
  position: 'start',
  onDrop: (source, target) => {
    const move = game.move({
      from: source,
      to: target,
      promotion: 'q' // her zaman vezire terfi
    });

    if (move === null) return 'snapback';
  }
});
