import React, { useEffect, useState } from "react";
import {
  Container,
  InputValue,
  Chords,
  Notes,
  StartFretNumber,
  Strings,
} from "./styles";

import API from "../../services/api";
import { Chord, ResponseChordAPI } from "../../@types";
import formatStringsChord from "../../utils/formatStringsChord";
import formatSearchChord from "../../utils/formatSearchChord";
import formatFingering from "../../utils/formatFingering";

const App: React.FC = () => {
  const [chord, setChord] = useState({} as Chord);
  const [chordName, setChordName] = useState("");
  const [message, setMessage] = useState("");
  const [startFretNumber, setStartFretNumber] = useState(0);

  useEffect(() => {
    async function fetchChordAPI() {
      if (chordName === "") return;

      const { data } = await API.get<ResponseChordAPI[]>(`${chordName}`);

      if (data.length > 0) {
        setStartFretNumber(0);

        let newChord: Chord = {
          strings: data[0].strings.split(" ").map((s) => Number(s)),
          fingering: data[0].fingering.split(" ").map((f) => Number(f)),
          chordName: data[0].chordName,
          tones: data[0].tones.split(","),
        };

        if (newChord.strings.some((s) => s >= 5)) {
          getStartFretNumber(newChord);

          newChord = formatStringsChord(newChord);
        }

        setChord(newChord);
      } else {
        setChord({} as Chord);
        setMessage(
          "Não encontramos esse acorde! Verifique se digitou corretamente."
        );
      }
    }

    fetchChordAPI();
  }, [chordName]);

  function getStartFretNumber(chord: Chord) {
    let indexFinger = chord.fingering.findIndex((f) => f === 1);

    if (indexFinger >= 0) {
      console.log("startFret", chord.strings[indexFinger]);
      setStartFretNumber(chord.strings[indexFinger]);
    }
  }

  function searchChord({
    currentTarget,
    key,
  }: React.KeyboardEvent<HTMLInputElement>) {
    currentTarget.value =
      currentTarget.value.charAt(0).toUpperCase() +
      currentTarget.value.slice(1);

    if (key === "Enter") {
      currentTarget.blur();

      console.log(currentTarget.value);
      let value = formatSearchChord(currentTarget.value);

      setChordName(value);
    }
  }

  return (
    <Container>
      <InputValue
        placeholder="Digite o nome do acorde"
        onKeyUp={(e) => {
          searchChord(e);
        }}
      />
      {Object.keys(chord).length !== 0 ? (
        <>
          <Chords>
            <StartFretNumber fret={startFretNumber}>
              {startFretNumber}
            </StartFretNumber>
            <Strings fret={chord.strings[0]} string="43px">
              {formatFingering(chord, 0)}
            </Strings>
            <Strings fret={chord.strings[1]} string="71px">
              {formatFingering(chord, 1)}
            </Strings>
            <Strings fret={chord.strings[2]} string="98px">
              {formatFingering(chord, 2)}
            </Strings>
            <Strings fret={chord.strings[3]} string="125px">
              {formatFingering(chord, 3)}
            </Strings>
            <Strings fret={chord.strings[4]} string="153px">
              {formatFingering(chord, 4)}
            </Strings>
            <Strings fret={chord.strings[5]} string="181px">
              {formatFingering(chord, 5)}
            </Strings>
          </Chords>

          <Notes>
            {chord.tones.map((tone, i) => (
              <div key={i} className="notes">
                {tone}
              </div>
            ))}
          </Notes>
        </>
      ) : (
        <p className="message">{message}</p>
      )}
      {chordName !== "" && (
        <audio
          src={`https://www.scales-chords.com/chord-sounds/snd-guitar-chord-${chordName}.mp3`}
          controls
        ></audio>
      )}
    </Container>
  );
};

export default App;
