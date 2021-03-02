import React, { useState } from "react";
import "./App.css";
import CheackBox from "./components/CheckBox";

function App() {
  const [check, setCheck] = useState(false);
  const onChange = (e) => {
    setCheck(e.target.checked);
  };
  return (
    <div>
      <CheackBox onChange={onChange} checked={check}>
        다음 약관에 모두 동의
      </CheackBox>
      <p>
        <b>check: </b>
        {check ? "true" : "false"}
      </p>
    </div>
  );
}

export default App;
