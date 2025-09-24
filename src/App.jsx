import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import Loading from "./components/Loading/Loading";
import Banner from "./components/Banner/Banner";

const fetchPlayers = async () => {
  const res = await fetch("./players.json");
  return res.json();
};

const playersPromise = fetchPlayers();
function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(6000000000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);

  const removePlayer = (player) => {
    console.log(player);
    const filteredPlayer = purchasedPlayers.filter(
      (card) => card.id !== player.id
    );

    setPurchasedPlayers(filteredPlayer);
  };

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <Banner></Banner>
      <div className="max-w-[1200px] mx-auto mt-20 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          {toggle
            ? "Available players"
            : `Selected Players (${purchasedPlayers.length}/6)`}
        </h1>

        <div className="flex font-semibold text-gray-600">
          <button
            onClick={() => setToggle(true)}
            className={`border border-gray-200 border-r-0 rounded-l-2xl py-2 px-4 ${
              toggle && "bg-[#E7FE29]"
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`border border-gray-200 border-l-0 rounded-r-2xl py-2 px-4 ${
              toggle || "bg-[#E7FE29]"
            }`}
          >
            Selected <span>({purchasedPlayers.length})</span>
          </button>
        </div>
      </div>

      {toggle === true ? (
        <Suspense fallback={<Loading></Loading>}>
          <AvailablePlayers
            playersPromise={playersPromise}
            setAvailableBalance={setAvailableBalance}
            availableBalance={availableBalance}
            purchasedPlayers={purchasedPlayers}
            setPurchasedPlayers={setPurchasedPlayers}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers
          removePlayer={removePlayer}
          purchasedPlayers={purchasedPlayers}
        ></SelectedPlayers>
      )}
    </>
  );
}

export default App;
