import React from "react";
import SelectedCart from "../SelectedCart/SelectedCart";

const SelectedPlayers = ({ purchasedPlayers, removePlayer }) => {

  return (
    <div className="max-w-[1200px] mx-auto mb-8">
      {purchasedPlayers.map((player) => (
        <SelectedCart
          key={player.id}
          removePlayer={removePlayer}
          player={player}
        ></SelectedCart>
      ))}
    </div>
  );
};

export default SelectedPlayers;
