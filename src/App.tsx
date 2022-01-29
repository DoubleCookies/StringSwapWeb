import React from 'react';
import './App.css';
import 'react-tabs/style/react-tabs.css';
import ComponentTabs from "./components/ComponentTabs";
import GithubIcon from "./components/GithubIcon";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";

function App() {
  const { t } = useTranslation(['translation']);
  const changeLanguage = () => {
    let lng = 'en';
    if (i18n.language === 'en') {
      lng = 'ru';
    }
    i18n.changeLanguage(lng).then();
  }

  return (
    <div className="app">
      <header className="app-header">
        <div>
          String Swap ಠ~ಠ
        </div>
        <div className="header-text-mini">
          {t("intro")}
          <button className="lang-button" aria-label="Switch language (en/ru)" title="Switch language (en/ru)"
                  onClick={() => changeLanguage()}>
            🌎
          </button>
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
