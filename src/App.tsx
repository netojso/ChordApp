import React, { useEffect, useState } from "react";
import { Container, InputValue, Chords, Notes, Strings } from "./styles";

import API from "./API/API";

interface ResponseChordAPI {
  strings: string;
  fingering: string;
  chordName: string;
  enharmonicChordName: string;
  voicingID: string;
  tones: string;
}

const App: React.FC = () => {
  useEffect(() => {}, []);

  const [chord, setChord] = useState({} as ResponseChordAPI);

  async function fetchChordAPI(params: String) {
    const response = await API.get(`${params}`);

    setChord(response.data[0]);
  }

  function findChord(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      fetchChordAPI(e.currentTarget.value.toUpperCase());
    }
  }

  return (
    <Container>
      <InputValue
        placeholder="Digite o nome do acorde"
        onKeyUp={(e) => {
          findChord(e);
        }}
      />
      <Chords>
        <Strings fret={1} string="43px" />
        <Strings fret={3} string="71px" />
        <Strings fret={3} string="98px" />
        <Strings fret={2} string="125px" />
        <Strings fret={1} string="153px" />
        <Strings fret={1} string="181px" />
      </Chords>
      <Notes>
        <div className="notes">C</div>
        <div className="notes">E</div>
        <div className="notes">G</div>
        <div className="notes">7</div>
      </Notes>
    </Container>
  );
};

export default App;

// const App = () => {
//   const something=(event)=> {
//       if (event.keyCode === 13) {
//           console.log('enter')
//       }
//   }
// return (
//   <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <input  type='text' onKeyDown={(e) => something(e) }/>
//   </div>
// );
// }
