import "./Home.css";

function App() {
  return (
    <div className="home">
      <h1 className="h1">Simple Authentication</h1>
      <div className="card">
        <h2 className="h2button">Sign Up</h2>
        <input
          type="email"
          name="email"
          className="input"
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          className="input"
          placeholder="Password"
        />
        <button type="submit" className="button">
          Register
        </button>
      </div>
    </div>
  );
}

export default App;
