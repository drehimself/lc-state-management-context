import './App.css';
import ChildA from './ChildA';
import ChildB from './ChildB';
import useStore from './store';

function App() {
  console.log('Parent App.jsx rendering');
  const countA = useStore(state => state.countA);
  const countB = useStore(state => state.countB);
  const incrementCountA = useStore(state => state.incrementCountA);
  const decrementCountA = useStore(state => state.decrementCountA);
  const incrementCountB = useStore(state => state.incrementCountB);
  const decrementCountB = useStore(state => state.decrementCountB);

  return (
    <div className="App">
      <header className="App-header">
        <h3>Parent App.jsx</h3>
        <div>
          <div>Parent Count A: {countA}</div>
          <div>
            <button onClick={decrementCountA}>Decrement Count A</button>
            <button onClick={incrementCountA}>Increment Count A</button>
          </div>
        </div>
        <div>
          <div>Parent Count B: {countB}</div>
          <div>
            <button onClick={decrementCountB}>Decrement Count B</button>
            <button onClick={incrementCountB}>Increment Count B</button>
          </div>
        </div>
        <div>
          <ChildA />
          <ChildB />
        </div>
      </header>
    </div>
  );
}

export default App;
