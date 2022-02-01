import React from "react";
import { useTranslation } from "react-i18next";


function ResultLabel() {
  const { t } = useTranslation(['translation']);

  return (
    <label className="form-label">{t("resultText")}</label>
  );
}

export default ResultLabel;