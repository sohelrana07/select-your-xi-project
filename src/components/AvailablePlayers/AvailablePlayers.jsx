import React, { use } from "react";
import Players from "../Players/Players";

const AvailablePlayers = ({
  playersPromise,
  setAvailableBalance,
  availableBalance,
  purchasedPlayers,
  setPurchasedPlayers,
}) => {
  const playerData = use(playersPromise);

  return (
    <div className="max-w-[1200px] mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 mt">
      {playerData.map((player) => (
        <Players
          key={player.id}
          player={player}
          setAvailableBalance={setAvailableBalance}
          availableBalance={availableBalance}
          purchasedPlayers={purchasedPlayers}
          setPurchasedPlayers={setPurchasedPlayers}
        ></Players>
      ))}
    </div>
  );
};

export default AvailablePlayers;
