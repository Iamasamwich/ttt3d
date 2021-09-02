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

  const checkTriple = (type) => {
    if (type[0] === type[1] && type[0] === type[2] && type[0] !== null) {
      return true;
    };
  };

  //l r 'c' 9
  //l 'r' c 9
  //l 'rc' 3
  //l 'r-c' 3

  //check 

  for (let a = 0; a < 3; a ++) {
    for (let b = 0; b < 3; b ++) {
      //same layer diagonals
      posDiag[b] = board[a][b][b];
      negDiag[b] = board[a][b][2-b];
      //same row cross layer diagonals
      rowDiag[b] = board[b][a][b];
      negRowDiag[b] = board[b][a][2 - b];
      //same col cross layer diags
      colDiag[b] = board[a][a][b];
      negColDiag[b] = board[b][2 - b][a];


      for (let c = 0; c < 3; c ++) {
        //check across on each layer (9) same layer same row increasing column
        rows[c] = board[a][b][c];
        //check across on each layer (9) same layer same row increasing column
        cols[c] = board[a][c][b];
        //check vertical down (9) same row and column, increasing layer
        layers[c] = board[c][a][b];
      };
      console.log('checking rows');
      if (checkTriple(rows)) {
        return rows[0];
      };
      console.log('checking cols');
      if (checkTriple(cols)) {
        return cols[0];
      };
      console.log('checking layers');
      if (checkTriple(layers)) {
        return layers[0];
      };
    };
    console.log('checking posDiag');
    if (checkTriple(posDiag)) {
      return posDiag[0];
    };
    console.log('checking negDiag');
    if (checkTriple(negDiag)) {
      return negDiag[0];
    }
    console.log('checking rowDiag');
    if (checkTriple(rowDiag)) return rowDiag[0];

    console.log('checking colDiag');
    if (checkTriple(colDiag)) return colDiag[0];
    console.log('checking negRowDiag');
    if (checkTriple(negRowDiag)) return negRowDiag[0];

    console.log('checking negColDiag');
    if (checkTriple(negColDiag)) return negColDiag[0];
  };





  //check down each layer (9) same layer same column increasing row


  // for (let l = 0; l < 3; l ++) {
  //   for (let r = 0; r < 3; r ++) {
  //     for (let c = 0; c < 3; c ++) {
  //       triple[c] = board[l][r][c];
  //     };
  //     if ((triple[0] === triple[1]) && (triple[0] === triple[2]) && triple[0] !== null) {
  //       return triple[0];
  //     };
  //   };
  // };
  
  // for (let l = 0; l < 3; l ++) {
  //   for (let c = 0; c < 3; c ++) {
  //     for (let r = 0; r < 3; r ++) {
  //       triple[r] = board[l][r][c];
  //     };
  //     if (triple[0] === triple[1] && triple[0] === triple[2] && triple[0] !== null) {
  //       return triple[0];
  //     };
  //   };
  // };

  // //check diagonals each layer (3) same layer increasing col and row
  // for (let l = 0; l < 3; l ++) {
  //   for (let rc = 0; rc < 3; rc ++) {
  //     triple[rc] = board[l][rc][rc];
  //   };
  //   if (checkMatch(triple)) {
  //     return triple[0];
  //   };
  // };

  // //check diagnonals each layer (3) same layer increasing row, decreasing col
  // console.log('checking backwards diagonals');
  // for (let l = 0; l < 3; l ++) {
  //   for (let rc = 0; rc < 3; rc ++) {
  //     triple[rc] = board[l][rc][2 - rc];
  //   };
  //   if (checkMatch(triple)) {
  //     return triple[0];
  //   };
  // };
  // abb
  // bab
  // bba

  // for (let r = 0; r < 3; r ++) {
  //   for (let c = 0; c < 3; c ++) {
  //     for (let l = 0; l < 3; l ++) {
  //       triple[l] = board[l][r][c];
  //     };
  //     if (checkMatch(triple)) {
  //       return triple[0];
  //     };
  //   };
  // };
  
  //check diagonals through layers same row increasing layer and col (3)
  // for (let r = 0; r < 3; r ++) {
  //   for (let lc = 0; lc < 3; lc ++) {
  //     triple[lc] = board[lc][r][lc];
  //   };
  //   if (checkMatch(triple)) {
  //     return triple[0];
  //   };
  // };
  //check diagonals through layers same column increasing layer and row(3)
  // for (let c = 0; c < 3; c ++) {
  //   for (let lr = 0; lr < 3; lr ++) {
  //     triple[lr] = board[lr][lr][c];
  //   }
  //   if (checkMatch(triple)) {
  //     return triple[0];
  //   };
  // }

  //check diagonals through layers same row inc layer and column (3)
  //check diagonals through layers same row inc layer dec column (3) 


  

  return ('returning results');
};



export default checkWinner;

// * 8 on each layer (24 total)
// * 9 going down through the layers
// * 12 going diagonally through the layers down or across
// * 2 going diagonally through the layers diagonally...