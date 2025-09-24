import React, { useState } from "react";

const Players = ({
  player,
  setAvailableBalance,
  availableBalance,
  purchasedPlayers,
  setPurchasedPlayers,
}) => {
  const {
    player_image,
    player_name,
    player_country,
    player_role,
    rating,
    batting_style,
    bowling_style,
    price,
  } = player;

  const [isSelected, setSelected] = useState(false);

  const handleSelected = (price) => {
    const Balance = Number(price.split("$").join("").split(",").join(""));
    if (availableBalance < Balance) {
      alert("Not enough coins!!");
      return;
    }
    setSelected(!isSelected);
    setAvailableBalance(availableBalance - Balance);
    setPurchasedPlayers([...purchasedPlayers, player]);
  };

  return (
    <div className="card bg-base-100 shadow-md p-4">
      <figure>
        <img
          src={player_image}
          alt="Shoes"
          className="w-full h-52 object-cover"
        />
      </figure>
      <div className="mt-4">
        <div className="flex items-center">
          <span>
            <i className="fa-solid fa-user text-xl text-gray-700"></i>
          </span>
          <h2 className="card-title ml-2">{player_name}</h2>
        </div>
        <div className="flex justify-between items-center mt-4 pb-4 border-b border-gray-300 text-gray-500">
          <div className="flex items-center">
            <i className="fa-solid fa-flag mr-2"></i>
            <span className="font-medium">{player_country}</span>
          </div>

          <button className="btn">{player_role}</button>
        </div>

        <div className="flex justify-between mt-4 font-bold">
          <span>Rating</span>
          <span>{rating}</span>
        </div>

        <div className="flex justify-between mt-4">
          <span className="font-bold">{batting_style}</span>
          <span className="text-gray-500 font-medium">{bowling_style}</span>
        </div>

        <div className="flex justify-between mt-4 items-center">
          <h5 className="font-bold">Price: {price}</h5>
          <button
            disabled={isSelected}
            onClick={() => handleSelected(price)}
            className="btn"
          >
            {isSelected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Players;
