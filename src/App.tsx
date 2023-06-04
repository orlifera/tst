import React, { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alert, alertVis] = useState(false);

  return (
    <div>
      {alert && <Alert onClose={() => alertVis(false)}>This is an alert</Alert>}
      <Button color="danger" onClick={() => alertVis(true)}>
        Alert!
      </Button>
    </div>
  );
}

export default App;
