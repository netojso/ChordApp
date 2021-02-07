import styled from "styled-components";

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
  justify-content: center;
  flex-direction: column;

  margin: 0px auto;
  overflow: hidden;
`;

const InputValue = styled.input`
  width: 70%;

  font-size: 15px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: center;

  border: 0px;
  border-radius: 6px;
  :focus {
    outline-style: none;
  }

  margin-bottom: 20px;
  padding: 10px;
`;

const Chords = styled.div`
  width: 248px;
  height: 288px;
  background-image: url(${chord});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;

const Strings = styled.div<StringProps>`
  position: absolute;

  top: ${(props) => {
    if (props.fret === 0) return "-558px";
    if (props.fret === 1) return "75px";
    if (props.fret === 2) return "120px";
    if (props.fret === 3) return "165px";
    if (props.fret === 4) return "209px";
  }};

  left: ${props => props.string};

  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #000;
`;

const Notes = styled.div`
  display: flex;
  margin-top: 20px;
  .notes {
    width: 30px;
    height: 30px;
    background-color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: bold;
    font-size: 20px;

    border: 1px solid #CC6D31;
    color: #CC6D31;
    margin: 0px 10px;
  }
`;

export { Container, InputValue, Chords, Notes, Strings };
