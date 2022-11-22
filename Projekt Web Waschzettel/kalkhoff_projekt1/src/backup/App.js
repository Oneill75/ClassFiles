import './App.css';

function App() {
  return (
    <div className="App">
      <div class="test-container">
      <img src="../Interstate_PR_Logo_Final.png"></img>
      <p>Interstate PR GmbH</p>
    </div>
    <nav class="navigation-left">
        <!-- <button type="button" id="login">Anmelden</button> -->
        <!-- <button type="button" id="releases">Veröffentlichungen</button>
        <button type="button" id="drafts">Eigene Entwürfe</button>
        <button type="button" id="deletes">Markierte Löschungen</button>
        <button type="button" id="logout">Abmelden</button> -->
    </nav>
    <div class="main-content">
      <form action='index.php' class="loginbox" id="loginbox">
        <input name= "Username" id="Username" type="text" placeholder="Benutzername">
        <input name="Password" id="Password" type="password" placeholder="Passwort">
        <button type="submit" id="login" >Anmelden</button>
        <button type="button" id="newUser">Neuer Benutzer</button>
        <?php
          include 'php/db_connect.php'
        ?>
      </form>
      </div>
    </div>
  );
}

export default App;
