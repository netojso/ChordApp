import styled, {css} from "styled-components";

import chord from "./assets/chord.png";

interface StringProps {
  fret: number;
  string: string;
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e4d4a4;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  margin: 0px auto;
  overflow: hidden;

  box-sizing: border-box;

  * {
    font-family: "Quicksand", sans-serif;
    }

  p.message {  
    width: 60%;
    font-size: 22px;
    text-align: center;
    font-weight: 600;
    color: #CC6D31;
  }
`;

const InputValue = styled.input`
  width: 70%;

  font-size: 15px;
  font-weight: 300;
  text-align: center;

  border: 0px;
  border-radius: 6px;

  :focus {
    outline-style: none;
  }

  margin: 40px;
  padding: 10px;

  color: #CC6D31;
  font-weight: 600;

  &::placeholder {
    color: #CC6D31;
    font-weight: 300;
  }
`;

const Chords = styled.div`
  width: 248px;
  height: 288px;
  background-image: url(${chord});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;

const StartFretNumber = styled.p<{fret: number}>`
  position: absolute;
  margin: 0;

  top: ${(props) => {
    if(props.fret < 2) return "-10900px"
    if (props.fret >= 2) return "72px";

  }};


  left: 25px;

  font-size: 25px;

`;

const Strings = styled.div<StringProps>`
  position: absolute;

  top: ${(props) => {
    if (props.fret === 0 || isNaN(props.fret)) return "30px";
    if (props.fret === 1) return "75px";
    if (props.fret === 2) return "120px";
    if (props.fret === 3) return "165px";
    if (props.fret === 4) return "209px";
  }};

  left: ${props => props.string};

  width: ${props => props.fret === 0 ? "20px" : "25px"};
  height:${props => props.fret === 0 ? "20px" : "25px"};
  border-radius: 50%;
  background: ${props => props.fret === 0 ? "#FFF" : "#000"};

  border: 1px solid #000;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #FFF;
  font-size: 15px;
  font-weight: bold;

  ${props => isNaN(props.fret) && css`

     :after {
        position:absolute;
        font-size: 45px;
        content: "\\d7";
        color:#000;
        font-weight:bold;
        top: -20px;
        left: 0px;
      }

    background: transparent;
    border: none;


  `}
`;

const Notes = styled.div`
  display: flex;
  margin-top: 40px;
  .notes {
    width: 45px;
    height: 45px;
    border-radius: 6px;

    background-color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: bold;
    font-size: 20px;

    border: 1px solid #CC6D31;
    color: #CC6D31;
    margin: 0px 6px;
  }
`;

export { Container, InputValue, Chords, Notes, StartFretNumber, Strings };
