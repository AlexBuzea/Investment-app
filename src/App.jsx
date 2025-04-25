import { useState } from "react";
import Input from "./components/Input";
import Header from "./components/Header";
import Result from "./components/Result";

function App() {
  const [initial, setInitial] = useState(undefined);
  const handleInitial = (e) => {
    setInitial(e.target.value);
  };

  const [annual, setAnnual] = useState(undefined);
  const handleAnnual = (e) => {
    setAnnual(e.target.value);
  };

  const [expected, setExpected] = useState(undefined);
  const handleExpected = (e) => {
    setExpected(e.target.value);
  };

  const [duration, setDuration] = useState(undefined);
  const handleDuration = (e) => {
    setDuration(e.target.value);
  };

  return (
    <div>
      <Header />
      <section id="user-input">
        <div className="input-group">
          <Input
            label="initial-investment"
            name="INITIAL INVESTMENT"
            value={initial}
            onChange={handleInitial}
          />
          <Input
            label="annual-investment"
            name="ANNUAL INVESTMENT"
            value={annual}
            onChange={handleAnnual}
          />
        </div>
        <div className="input-group">
          <Input
            label="expected-return"
            name="EXPECTED RETURN (%)"
            value={expected}
            onChange={handleExpected}
          />
          <Input
            label="duration"
            name="DURATION"
            value={duration}
            onChange={handleDuration}
          />
        </div>
      </section>
      <Result
        initial={initial}
        annual={annual}
        expected={expected}
        duration={duration}
      />
    </div>
  );
}

export default App;
