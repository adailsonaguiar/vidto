import RTCMesh from "react-rtc-real";
require("react-rtc-real/assets/index.css");

function App() {
  return <RTCMesh URL="wss://e4103ee5b0d8.ngrok.io" />;
}

export default App;
