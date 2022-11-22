import './App.css';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <img src="example-logo-2.jpg" alt="Firmenlogo" />
        <form>
          <p>Username: <input type='text'></input></p>
          <p>Password: <input type='password'></input></p>
          <button type='submit' class="button" id="login">Einloggen</button>
          <span> </span>
          <button type='submit' class="button" id="newUser">Registrieren</button>
        </form>
      </header>
    </div>
  );
}

export default App;
