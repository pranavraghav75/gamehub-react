import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button color="danger" onClick={() => alert("WHAT THE HECK MAN")}>
        <strong>Hello World</strong> Jit
      </Button>
    </div>
  );
}

export default App;
