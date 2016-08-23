import React from 'react';

class Tile extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const tile = () => {
        if (this.props.tile.revealed) {
          if (this.props.tile.flagged) {
            return 'f';
          } else if (this.props.tile.bombed) {
            return 'b';
          } else {
            return this.props.tile.adjacentBombCount();
          }
        } else {
          return "";
        }
    };

    return(<div className="tile">{tile}</div>);
  }
}


export default Tile;
