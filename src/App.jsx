import Player from "./components/Player";
import TimerChallenge from "./components/TimerChallenge";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <div id="challenges">
          <TimerChallenge title="Easy" targetTime={1} />
          <TimerChallenge title="Medium" targetTime={5} />
          <TimerChallenge title="Hard" targetTime={10} />
          <TimerChallenge title="Impossible" targetTime={15} />
        </div>
      </div>
    </>
  );
}

export default App;
