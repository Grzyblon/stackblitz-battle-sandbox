import React from 'react';

const Battle = () => {
  // Create an array to represent the grid positions
  const gridPositions = [
    ['Back Left', 'Back Center', 'Back Right'],
    ['Front Left', 'Front Center', 'Front Right'],
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

export default Battle;
