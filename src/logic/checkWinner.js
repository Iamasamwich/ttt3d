const checkWinner = (board) => {
  //check diagonal diagonal (2)
  
  let rows = [];
  let cols = [];
  let layers = [];
  let posDiag = [];
  let negDiag = [];
  let rowDiag = [];
  let colDiag = [];
  let negRowDiag = [];
  let negColDiag = [];
  let tlubrl = [];
  let trubll = [];
  let brutll = [];
  let blutrl = [];

  const checkTriple = (type) => {
    if (type[0] === type[1] && type[0] === type[2] && type[0] !== null) {
      return true;
    };
  };

  for (let a = 0; a < 3; a ++) {
    //check topleftupper to bottomrightlower
    tlubrl[a] = board[a][a][a];
    //check toprightupper to bottomleftlower
    trubll[a] = board[a][a][2-a];
    //check bottomrightupper to topleftlower
    brutll[a] = board[a][2-a][2-a];
    //check bottomleftupper to toprightlower
    blutrl[a] = board[a][2-a][a]

    for (let b = 0; b < 3; b ++) {
      //same layer diagonals
      posDiag[b] = board[a][b][b];
      negDiag[b] = board[a][b][2-b];
      //same row cross layer diagonals 
      rowDiag[b] = board[b][a][b];
      negRowDiag[b] = board[b][a][2 - b];
      //same col cross layer diags
      colDiag[b] = board[b][b][a];
      negColDiag[b] = board[b][2 - b][a];

      for (let c = 0; c < 3; c ++) {
        //check across on each layer (9) same layer same row increasing column
        rows[c] = board[a][b][c];
        //check across on each layer (9) same layer same row increasing column
        cols[c] = board[a][c][b];
        //check vertical down (9) same row and column, increasing layer
        layers[c] = board[c][a][b];
      };
      //see if any of the solutions that need all three variables succeeded
      if (checkTriple(rows)) return rows[0];
      if (checkTriple(cols)) return cols[0];
      if (checkTriple(layers)) return layers[0];
    };
    //see if any solutions that require 2 variables succeeded
    if (checkTriple(posDiag)) return posDiag[0];
    if (checkTriple(negDiag)) return negDiag[0];
    if (checkTriple(rowDiag)) return rowDiag[0];
    if (checkTriple(negRowDiag)) return negRowDiag[0];
    if (checkTriple(colDiag)) return colDiag[0];
    if (checkTriple(negColDiag)) return negColDiag[0];
  };
  //see if solutions that need 1 variable succeeded
  if (checkTriple(tlubrl)) return tlubrl[0];
  if (checkTriple(trubll)) return trubll[0];
  if (checkTriple(brutll)) return brutll[0];
  if (checkTriple(blutrl)) return blutrl[0];

  //if not, return nothing;
  return;
};

export default checkWinner;