import React from 'react';
import './App.css';
import 'react-tabs/style/react-tabs.css';
import ComponentTabs from "./components/ComponentTabs";
import GithubIcon from "./components/GithubIcon";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div>
          String Swap ಠ~ಠ
        </div>
      </header>
      <main className="main-content">
        <ComponentTabs/>
      </main>
      <footer className="footer-block">
        <div>
          <GithubIcon />
        </div>
        <div>2021-2022 <span role="img" aria-label="cookieEmoji">🍪</span></div>
      </footer>
    </div>
  );
}

export default App;
