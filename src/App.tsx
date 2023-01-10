import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Container from "./components/Container";
import Clocks from "./components/Clocks";
import Quote from "./components/Quote";
import Details from "./components/Details";

const App = () => {
  const [active, setActive] = useState(false);

  return (
    <Container>
      <Quote />
      <Clocks active={active} setActive={setActive} />
      <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
        {active && <Details />}
      </AnimatePresence>
    </Container>
  );
};

export default App;
