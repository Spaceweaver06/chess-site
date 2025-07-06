const board = Chessboard('board', {
  draggable: true,
  position: 'start',
  onDrop: onDrop
});

const game = new Chess();

function onDrop(source, target) {
  const move = game.move({
    from: source,
    to: target,
    promotion: 'q' // daima vezir terfisi
  });

  if (move === null) return 'snapback';
}
