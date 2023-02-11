import { useState } from 'react'
import './App.css';
import MoleContainer from './MoleContainer';
import Reset from './Reset';
import Pause from './Pause';

function App() {
  let [score, setScore] = useState(0)
  let [missed, setMissed] = useState(0)

  const createMoleHill = () => {
    let hills = []
    for(let i=0; i<9; i++){
      hills.push(
        <MoleContainer
        key = ''
        setScore={setScore}
        score = {score} 
        setMissed={setMissed}
        missed={missed}/>
      )
    }
    return (
      <div className = 'mole-grid'>
        {hills}
      </div>
    )
  }

  return (
    <div className="App">
      <h1>React-A-Mole!</h1>
      <div className='toggles'>
        <Reset setScore = {setScore}
        setMissed = {setMissed}/>
        <Pause />
      </div>
      
        <div>
          <div className = 'scores'>
            <div>
              <h2>HIT:</h2>
              <h3>{score}</h3>
              <hr></hr>
            </div>
            <div>
              <h2>MISSED:</h2>
              <h3>{missed}</h3>
              <hr></hr>
            </div>
          </div>
          
          {createMoleHill()}
        </div>
    </div>
  );
}

export default App;
