import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ReplaceText from "./textModules/ReplaceText";
import AddPrefix from "./textModules/AddPrefix";
import FileNames from "./textModules/FileNames";
import NavboxGenerator from "./textModules/NavboxGenerator";
import QuoteReplacement from "./textModules/QuoteReplacement";
import GalleryGenerator from "./textModules/GalleryGenerator";
import React from "react";
import { useTranslation } from "react-i18next";

function ComponentTabs() {
  const { t } = useTranslation(['translation']);
  const replaceText = t("replaceText");
  const addPrefix = t("addPrefix");
  const fileNames = t("fileNames");
  const quoteReplacement = t("quoteReplacement");
  const navboxGenerator = t("navboxGenerator");
  const galleryGenerator = t("galleryGenerator");

  return (
    <Tabs>
      <TabList>
        <Tab>{replaceText}</Tab>
        <Tab>{addPrefix}</Tab>
        <Tab>{fileNames}</Tab>
        <Tab>{quoteReplacement}</Tab>
        <Tab>{navboxGenerator}</Tab>
        <Tab>{galleryGenerator}</Tab>
      </TabList>
      <TabPanel>
        <ReplaceText description={t("replaceTextInfo")}/>
      </TabPanel>
      <TabPanel>
        <AddPrefix description={t("addPrefixInfo")}/>
      </TabPanel>
      <TabPanel>
        <FileNames description={t("fileNamesInfo")}/>
      </TabPanel>
      <TabPanel>
        <QuoteReplacement description={t("quoteReplacementInfo")}/>
      </TabPanel>
      <TabPanel>
        <NavboxGenerator description={t("navboxGeneratorInfo")}/>
      </TabPanel>
      <TabPanel>
        <GalleryGenerator description={t("galleryGeneratorInfo")}/>
      </TabPanel>
    </Tabs>
  );
}

export default ComponentTabs;