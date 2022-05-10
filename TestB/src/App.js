import "./App.css";
import { LinkShortener } from "./component/LinkShortener/index";

function App() {
  return (
    <div>
      <div>
        <h1 style={{ marginLeft: "14%" }}> Link Shortener</h1>
        <LinkShortener />
      </div>
      <div></div>
    </div>
  );
}

export default App;
