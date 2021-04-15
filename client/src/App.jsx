import "./Home.css";
import AuthForm from "./components/AuthForm";

function App() {
  async function pingServer() {
    const data = await fetch("http://localhost:3001/ping");
    console.log("data:", data);
  }

  pingServer();

  return (
    <div className="home">
      <h1 className="h1">Simple Authentication</h1>
      <AuthForm />
    </div>
  );
}

export default App;
