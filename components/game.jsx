import React from 'react';
import Minesweeper from '../minesweeper';
import Board from './board';

class Game extends React.Component {
  constructor() {
    super();
    this.state = { board: new Minesweeper.Board(8, 10) };
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame() {

  }

  render() {
    return (
      <div>
        <h1> Minesweeper </h1>
        <Board board={this.state.board} update={this.updateGame}/>
      </div>
    );
  }
}

export default Game;
