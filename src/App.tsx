import React from 'react';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReplaceText from "./components/replaceText/ReplaceText";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div>
          String Swap ಠ~ಠ
        </div>
      </header>
      <main className="main-content">
        <Tabs>
          <TabList>
            <Tab>Замена текста</Tab>
            <Tab>Title 2</Tab>
          </TabList>

          <TabPanel>
            <ReplaceText/>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </main>
      <footer className="footer-block">
        <div>2021-2022 <span role="img" aria-label="cookieEmoji">🍪</span></div>
      </footer>
    </div>
  );
}

export default App;
