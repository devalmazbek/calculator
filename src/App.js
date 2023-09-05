import Bill from "./components/bill/Bill";
import "./App.css";
import { useState } from "react";
import Service from "./components/service/Service";

function App() {
  const [bill, setBill] = useState("");
  const [service, setService] = useState(0);
  const [friend, setFriend] = useState(0);

  const tip = bill * ((service + friend) / 2 / 100);

  const handleResetStates = () => {
    setBill("");
    setFriend(0);
    setService(0);
  };

  return (
    <div className="App">
      <Bill bill={bill} setBill={setBill} />
      <Service service={service} onService={setService}>
        How did you like the service?{" "}
      </Service>
      <Service service={friend} onService={setFriend}>
        How did you like your friend the service?{" "}
      </Service>
      <div>
        {bill > 0 && (
          <>
            <h3>{`You pay $${tip + bill}(${bill} + ${tip})`}</h3>{" "}
            <button onClick={handleResetStates}>reset</button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
