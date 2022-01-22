import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ReplaceText from "./replaceText/ReplaceText";
import AddPrefix from "./addPrefix/AddPrefix";
import FileNames from "./fileNames/FileNames";
import NavboxGenerator from "./navboxGenerator/NavboxGenerator";
import QuoteReplacement from "./quoteReplacement/QuoteReplacement";
import GalleryGenerator from "./galleryGenerator/GalleryGenerator";
import React from "react";

function ComponentTabs() {
  return (
    <Tabs>
      <TabList>
        <Tab>Замена текста</Tab>
        <Tab>Добавление префикса</Tab>
        <Tab>Список файлов</Tab>
        <Tab>Замена кавычек</Tab>
        <Tab>Генератор навбоксов</Tab>
        <Tab>Генератор галерей</Tab>
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
        <QuoteReplacement/>
      </TabPanel>
      <TabPanel>
        <NavboxGenerator/>
      </TabPanel>
      <TabPanel>
        <GalleryGenerator/>
      </TabPanel>
    </Tabs>
  );
}

export default ComponentTabs;