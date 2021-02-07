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


interface Chord {
  strings: string[],
  fingering: string[],
  chordName: string,
  tones: string[]
}

const App: React.FC = () => {
  const [chord, setChord] = useState({} as Chord);
  const [chordName, setChordName] = useState("C");

  useEffect(() => {
    async function fetchChordAPI() {

      if(chordName === "") return;

      const { data } = await API.get<ResponseChordAPI[]>(`${chordName}`);
  
      if(data.length > 0) {

        const newChord: Chord = {
          strings: data[0].strings.split(" "),
          fingering: data[0].fingering.split(" "),
          chordName: data[0].chordName,
          tones: data[0].tones.split(",")
        };
  
        console.log(newChord);

        setChord(newChord);
      }
      
    }

    fetchChordAPI();

  }, [chordName])


  function findChord(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.currentTarget.blur();
      setChordName(e.currentTarget.value.toUpperCase())
    }
  }

  function formatFingering(index: number) {
      const isNumber = !isNaN(Number(chord.fingering[index]));

      if(isNumber){
        return Number(chord.fingering[index]);
      } 

      return "";
  }
  

  return (
    <Container>
      <InputValue
        placeholder="Digite o nome do acorde"
        onKeyUp={(e) => {
          findChord(e);
        }}
      />
      {Object.keys(chord).length !== 0 ? (
          <>
            <Chords>
            <Strings fret={Number(chord.strings[0])} string="43px">{formatFingering(0)}</Strings>
            <Strings fret={Number(chord.strings[1])} string="71px">{formatFingering(1)}</Strings>
            <Strings fret={Number(chord.strings[2])} string="98px">{formatFingering(2)}</Strings>
            <Strings fret={Number(chord.strings[3])} string="125px">{formatFingering(3)}</Strings>
            <Strings fret={Number(chord.strings[4])} string="153px">{formatFingering(4)}</Strings>
            <Strings fret={Number(chord.strings[5])} string="181px">{formatFingering(5)}</Strings>
            </Chords>
    
            <Notes>
              {chord.tones.map((tone, i) => (
                <div key={i} className="notes">{tone}</div>
              ))}
            </Notes>
          </>
        ) :
        (
          <p>Nenhum acorde identificado</p>
        )
      }
     
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
