import "./App.css";
import Ballot from "./Components/Ballot/Ballot";
import { Theme } from "./Utils/Theme";
import { Container } from "./Components/Container";

function App() {
  return (
    <Theme>
      <Container>
        <Ballot />
      </Container>
    </Theme>
  );
}

export default App;
