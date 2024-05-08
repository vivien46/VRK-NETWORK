import React, { useState } from "react";
import i18n from "../i18n";

const LanguageSelector: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>(i18n.language);

  const chooseLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const newLanguage = e.target.value;
    i18n.changeLanguage(newLanguage);
    setSelectedLanguage(newLanguage);
  };

  return (
    <select defaultValue={selectedLanguage} onChange={chooseLanguage}>
      <option value="en">English</option>
      <option value="fr">Français</option>
    </select>
  );
};

export default LanguageSelector;
