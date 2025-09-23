import React, { use } from "react";

const AvailablePlayers = ({ playersPromise }) => {
  const playerData = use(playersPromise);
  console.log(playerData);

  return (
    <div className="max-w-[1200px] mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 mt">
      {playerData.map((player) => (
        <div key={player.id} className="card bg-base-100 shadow-md p-4">
          <figure>
            <img
              src={player.player_image}
              alt="Shoes"
              className="w-full h-52 object-cover"
            />
          </figure>
          <div className="mt-4">
            <div className="flex items-center">
              <i class="fa-solid fa-user text-xl text-gray-700"></i>
              <h2 className="card-title ml-2">{player.player_name}</h2>
            </div>
            <div className="flex justify-between items-center mt-4 pb-4 border-b border-gray-300 text-gray-500">
              <div className="flex items-center">
                <i className="fa-solid fa-flag mr-2"></i>
                <span className="font-medium">{player.player_country}</span>
              </div>

              <button className="btn">{player.player_role}</button>
            </div>

            <div className="flex justify-between mt-4 font-bold">
              <span>Rating</span>
              <span>{player.rating}</span>
            </div>

            <div className="flex justify-between mt-4">
              <span className="font-bold">{player.batting_style}</span>
              <span className="text-gray-500 font-medium">
                {player.bowling_style}
              </span>
            </div>

            <div className="flex justify-between mt-4 items-center">
              <h5 className="font-bold">Price: {player.price}</h5>
              <button className="btn">Choose Player</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailablePlayers;
