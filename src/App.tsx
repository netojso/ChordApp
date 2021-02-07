import React from "react";

import { Container, InputValue, Chords, Notes, Strings } from "./styles";

const App: React.FC = () => {
  return (
    <Container>
      <InputValue />
      <Chords>
        <Strings></Strings>
      </Chords>
      <Notes></Notes>
    </Container>
  );
};

export default App;
