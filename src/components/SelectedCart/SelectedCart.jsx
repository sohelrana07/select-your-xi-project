import React from "react";

const SelectedCart = ({ player, removePlayer }) => {
  const { player_name, player_image, player_role } = player;

  return (
    <div className="flex justify-between items-center p-6 border border-gray-200 rounded-2xl shadow-sm mt-6">
      <div className="flex items-center gap-6">
        <figure>
          <img
            src={player_image}
            alt=""
            className="w-20 h-20 object-cover rounded-2xl brightness-90"
          />
        </figure>
        <div>
          <h1 className="text-2xl font-semibold mb-2">{player_name}</h1>
          <h3 className="text-gray-500 font-medium">{player_role}</h3>
        </div>
      </div>
      <div onClick={() => removePlayer(player)}>
        <span>
          <i className="fa-solid fa-trash-can text-red-500"></i>
        </span>
      </div>
    </div>
  );
};

export default SelectedCart;
