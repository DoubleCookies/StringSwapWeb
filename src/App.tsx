import React from 'react';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReplaceText from "./components/replaceText/ReplaceText";
import AddPrefix from "./components/addPrefix/AddPrefix";
import FileNames from "./components/fileNames/FileNames";
import NavboxGenerator from "./components/navboxGenerator/NavboxGenerator";
import QuoteReplacement from "./components/quoteReplacement/QuoteReplacement";

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
            <Tab>Добавление префикса</Tab>
            <Tab>Список файлов</Tab>
            <Tab>Генератор навбоксов</Tab>
            <Tab>Замена кавычек</Tab>
          </TabList>
          <TabPanel>
            <ReplaceText/>
          </TabPanel>
          <TabPanel>
            <AddPrefix/>
          </TabPanel>
          <TabPanel>
            <FileNames/>
          </TabPanel>
          <TabPanel>
            <NavboxGenerator/>
          </TabPanel>
          <TabPanel>
            <QuoteReplacement/>
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
