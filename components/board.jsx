import React from 'react';
import Tile from './tile';

class Board extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    const tiles = row => {
      console.log("makin tiles");
      return row.map((tile, tileIdx) => (
          <Tile tile={tile} update={this.props.update} key={tileIdx}/>
      ));
    };

    const rows = this.props.board.grid.map((row, rowIdx) => (
      <div key={rowIdx} className="row">
        {tiles(row)}
      </div>
    ));

    return (
      <div className="board">
        {rows}
      </div>
    );
  }
}


export default Board;
