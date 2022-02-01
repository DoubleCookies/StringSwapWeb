import React from "react";
import { useTranslation } from "react-i18next";


function CustomLabel(props: any) {
  const { t } = useTranslation(['translation']);

  return (
    <label>{t(props.name)}</label>
  );
}

export default CustomLabel;