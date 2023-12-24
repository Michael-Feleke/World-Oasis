import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: cyan;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">The Wild Oasis</Heading>
        <Heading as="h2">Check in /out</Heading>
        <Button>Check in</Button>
        <Button>Check out</Button>
        <Input type="number" placeholder="Number of guests" />
        <Input type="number" placeholder="Number of guests" />
        <Heading as="h3">Form</Heading>
      </StyledApp>
    </>
  );
}

export default App;
