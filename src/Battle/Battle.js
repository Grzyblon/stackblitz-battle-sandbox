import React from 'react';

const BattleWindow = () => {
  // Create an array to represent the grid positions
  const gridPositions = [
    ['Front Left', 'Front Center', 'Front Right'],
    ['Back Left', 'Back Center', 'Back Right'],
  ];

  // Map over the positions and render them as grid items
  const gridItems = gridPositions.map((row, rowIndex) => (
    <div key={rowIndex} className="row">
      {row.map((position, colIndex) => (
        <div key={colIndex} className="position">
          {position}
        </div>
      ))}
    </div>
  ));

  return <div className="battle-window">{gridItems}</div>;
};

export default BattleWindow;
