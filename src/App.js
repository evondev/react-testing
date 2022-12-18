import Login from "./Login";
import logo from "./logo.svg";

function App() {
  return (
    <div>
      <ul>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
      </ul>
      <h1 data-testid="mytestid">Hello</h1>
      <Login></Login>
    </div>
  );
}

export default App;
