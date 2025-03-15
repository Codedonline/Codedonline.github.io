// Chessboard state: A 2D array to represent the chessboard
let boardState = [
  ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'], // Row 1 (Black pieces)
  ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'], // Row 2 (Pawns)
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], // Row 3 (Empty)
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], // Row 4 (Empty)
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], // Row 5 (Empty)
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], // Row 6 (Empty)
  ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'], // Row 7 (White pawns)
  ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'], // Row 8 (White pieces)
];

// Keep track of the last state
let previousState = JSON.parse(JSON.stringify(boardState));

// Function to simulate a move
function simulateMove(from, to) {
  // Extract positions (e.g., "E2" -> row: 6, col: 4)
  const fromRow = 8 - parseInt(from[1]);
  const fromCol = from.charCodeAt(0) - 'A'.charCodeAt(0);

  const toRow = 8 - parseInt(to[1]);
  const toCol = to.charCodeAt(0) - 'A'.charCodeAt(0);

  // Perform the move
  boardState[toRow][toCol] = boardState[fromRow][fromCol];
  boardState[fromRow][fromCol] = ' ';

  // Log the move
  console.log(`${from},${to}`);
}

// Example moves
simulateMove("E2", "E4"); // Move white pawn
simulateMove("G8", "F6"); // Move black knight
